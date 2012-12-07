// Type definitions for YouTube [No version numbering]
// Project: https://developers.google.com/youtube/
// Definitions by: Daz Wilkin <https://github.com/DazWilkin/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// I'm a TypeScript noob so please be gentle!

module Google.YT {
    interface Event {
        (event: any): void;
    }
    interface Events {
        onReady?: Event;
        onPlayback?: Event;
        onStateChange?: Event;
    }
    interface PlayerVars {
        autohide?: number;
        autoplay?: number;
        cc_load_policy?: any;
        color?: any;
        playerpiid?: string;
        showinfo?: number;
        theme?: any;
    }
    interface PlayerOptions {
        width: number;
        height: number;
        videoId: string;
        playerVars: PlayerVars;
        events: Events;
    }
    interface LoadVideoByTestId {
        videoId: string;
        startSeconds: number;
        endSeconds: number;
        suggestedQuality: string;
    }
    interface Player {
        // Constructor
        new (string, playerOptions:PlayerOptions): any;

        // Queueing functions
        //loadVideoById:(videoId: string, startSeconds: number, suggestedQuality: string)=> void;
        loadVideoById:(LoadVideoByTestId)=> void;

        // Properties
        size;
        
        // Playing
        playVideo: () =>void;
        pauseVideo: () =>void;
        stopVideo: () =>void;
        seekTo: (seconds:number, allowSeekAhead:bool) =>void;
        clearVideo: () =>void;

        // Playlist
        nextVideo: () =>void;
        previousVideo: () =>void;
        playVideoAt:(index: number) =>void;

        // Volume
        mute: () =>void;
        unMute: () =>void;
        isMuted: () =>bool;
        setVolume: (volume: number) =>void;
        getVolume: () =>number;

        // Sizing
        setSize: (width: number, height: number) =>any;

        // Playback
        getPlaybackRate: () =>number;
        setPlaybackRate: (suggestedRate:number) =>void;
        getAvailablePlaybackRates(): number[];
        
        // Behavior
        setLoop: (loopPlaylists: bool) =>void;
        setShuffle: (shufflePlaylist: bool) =>void;

        // Status
        getVideoLoadedFraction: () =>number;
        getPlayerState: () =>number;
        getCurrentTime:()=> number;
        getVideoStartBytes:()=>number;
        getVideoBytesLoaded: () =>number;
        getVideoBytesTotal: () =>number;

        // Information
        getDuration: () =>number;
        getVideoUrl: () =>string;
        getVideoEmbedCode: () =>string;

        // Playlist
        getPlaylist: () =>any[];
        getPlaylistIndex:()=>number;
        
        // Event Listener
        addEventListener: (event: string, listener: string) =>void;

    }
}
interface YT {
    Player: Google.YT.Player;
    PlayerState: {
        BUFFERING: number;
        CUED: number;
        ENDED: number;
        PAUSED: number;
        PLAYING: number;
    };
}
