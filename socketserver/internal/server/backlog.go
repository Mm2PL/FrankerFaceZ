package server

import (
	"errors"
	"fmt"
	"net/http"
)

type PushCommandCacheInfo struct {
	Caching BacklogCacheType
	Target  MessageTargetType
}

// this value is just docs right now
var ServerInitiatedCommands = map[string]PushCommandCacheInfo{
	/// Global updates & notices
	"update_news": {CacheTypeTimestamps, MsgTargetTypeGlobal}, // timecache:global
	"message":     {CacheTypeTimestamps, MsgTargetTypeGlobal}, // timecache:global
	"reload_ff":   {CacheTypeTimestamps, MsgTargetTypeGlobal}, // timecache:global

	/// Emote updates
	"reload_badges": {CacheTypeTimestamps, MsgTargetTypeGlobal},    // timecache:global
	"set_badge":     {CacheTypeTimestamps, MsgTargetTypeMultichat}, // timecache:multichat
	"reload_set":    {CacheTypeTimestamps, MsgTargetTypeMultichat}, // timecache:multichat
	"load_set":      {},                                            // TODO what are the semantics of this?

	/// User auth
	"do_authorize": {CacheTypeNever, MsgTargetTypeSingle}, // nocache:single

	/// Channel data
	// follow_sets: extra emote sets included in the chat
	// follow_buttons: extra follow buttons below the stream
	"follow_sets":    {CacheTypePersistent, MsgTargetTypeChat},     // mustcache:chat
	"follow_buttons": {CacheTypePersistent, MsgTargetTypeWatching}, // mustcache:watching
	"srl_race":       {CacheTypeLastOnly, MsgTargetTypeWatching},   // cachelast:watching

	/// Chatter/viewer counts
	"chatters": {CacheTypeLastOnly, MsgTargetTypeWatching}, // cachelast:watching
	"viewers":  {CacheTypeLastOnly, MsgTargetTypeWatching}, // cachelast:watching
}
var _ = ServerInitiatedCommands

type BacklogCacheType int

const (
	// This is not a cache type.
	CacheTypeInvalid BacklogCacheType = iota
	// This message cannot be cached.
	CacheTypeNever
	// Save the last 24 hours of this message.
	// If a client indicates that it has reconnected, replay the messages sent after the disconnect.
	CacheTypeTimestamps
	// Save only the last copy of this message, and always send it when the backlog is requested.
	CacheTypeLastOnly
	// Save this backlog data to disk with its timestamp.
	// Send it when the backlog is requested, or after a reconnect if it was updated.
	CacheTypePersistent
)

type MessageTargetType int

const (
	// This is not a message target.
	MsgTargetTypeInvalid MessageTargetType = iota
	// This message is targeted to a single TODO(user or connection)
	MsgTargetTypeSingle
	// This message is targeted to all users in a chat
	MsgTargetTypeChat
	// This message is targeted to all users in multiple chats
	MsgTargetTypeMultichat
	// This message is targeted to all users watching a stream
	MsgTargetTypeWatching
	// This message is sent to all FFZ users.
	MsgTargetTypeGlobal
)

// note: see types.go for methods on these

// Returned by BacklogCacheType.UnmarshalJSON()
var ErrorUnrecognizedCacheType = errors.New("Invalid value for cachetype")

// Returned by MessageTargetType.UnmarshalJSON()
var ErrorUnrecognizedTargetType = errors.New("Invalid value for message target")

func HBackendUpdateAndPublish(w http.ResponseWriter, r *http.Request) {
	formData, err := UnsealRequest(r.Form)
	if err != nil {
		w.WriteHeader(403)
		fmt.Fprintf(w, "Error: %v", err)
		return
	}

	cmd := formData.Get("command")
	cacheinfo, ok := ServerInitiatedCommands[cmd]
	if !ok {
		w.WriteHeader(422)
	}
}
