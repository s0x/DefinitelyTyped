// Type definitions for Foundation Sites v6.0.4
// Project: http://foundation.zurb.com/
// Definitions by: Sam Vloeberghs <https://github.com/samvloeberghs/>
// Definitions by: Michał Wrześniewski <https://github.com/wrzesm01/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module Foundation {

    // http://foundation.zurb.com/sites/docs/abide.html#javascript-reference
    interface Abide {
        requiredCheck(element:Object): boolean;
        findLabel(element:Object): boolean;
        addErrorClasses(element:Object): void;
        removeErrorClasses(element:Object): void;
        validateInput(element:Object, form:Object): void;
        validateForm(element:Object): void;
        validateText(element:Object): boolean;
        validateRadio(group:String): boolean;
        resetform($form:Object): void;
    }

    export interface IAbidePatterns {
        alpha?: RegExp;
        alpha_numeric?: RegExp;
        integer?: RegExp;
        number?: RegExp;
        card?: RegExp;
        cvv?: RegExp;
        email ?: RegExp;
        url?: RegExp;
        domain?: RegExp;
        datetime?: RegExp;
        date?: RegExp;
        time?: RegExp;
        dateISO?: RegExp;
        month_day_year?: RegExp;
        day_month_year?: RegExp;
        color?: RegExp;
    }

    export interface IAbideOptions {
        slideSpeed?: number
        multiOpen?: boolean;
    }

    // http://foundation.zurb.com/sites/docs/accordion.html#javascript-reference
    export interface Accordion {
        toggle($target:JQuery): void;
        down($target:JQuery, firstTime:boolean): void;
        up($target:JQuery): void;
        destroy(): void;
    }

    interface IAccordionOptions {
        slideSpeed?: number
        multiOpen?: boolean;
    }

    // http://foundation.zurb.com/sites/docs/accordion-menu.html#javascript-reference
    export interface AccordionMenu {
        toggle($target:JQuery): void;
        down($target:JQuery, firstTime:boolean): void;
        up($target:JQuery): void;
        destroy(): void;
    }

    // http://foundation.zurb.com/sites/docs/drilldown-menu.html#javascript-reference
    export interface Drilldown {
        _hideAll($elem:JQuery): void;
        _show($elem:JQuery): void;
        _hide($elem:JQuery): void;
        destroy(): void;
    }

    interface IDrilldownOptions {
        backButton?: String;
        wrapper?: String
        closeOnClick?: boolean
    }

    // http://foundation.zurb.com/sites/docs/dropdown.html#javascript-reference
    export interface Dropdown {
        getPositionClass(): String;
        open(): void;
        close(): void;
        toggle(): void;
        destroy(): void;
    }

    interface IDropdownOptions {
        hoverDelay?: number;
        hover?: boolean;
        vOffset?: number;
        hOffset?: number;
        positionClass?: String;
        trapFocus?: boolean;
        autoFocus?: boolean;
    }

    // http://foundation.zurb.com/sites/docs/dropdown-menu.html#javascript-reference
    export interface DropdownMenu {
        destroy(): void;
    }

    interface IDropdownMenuOptions {
        disableHover?: boolean;
        autoclose?: boolean;
        hoverDelay?: number;
        clickOpen?: boolean;
        closingTime?: number;
        alignments?: String;
        verticalClasss?: String;
        rightClasss?: String;
    }

    // http://foundation.zurb.com/sites/docs/equalizer.html#javascript-reference
    export interface Equalizer {
        getHeights(element:Object): Array<any>;
        applyHeight($eqParent:Object, heights:Array): void;
        destroy(): void;
    }

    interface IEqualizerOptions {
        equalizeOnStack?: boolean;
        throttleInterval?: number;
    }

    // http://foundation.zurb.com/sites/docs/interchange.html#javascript-reference
    export interface Interchange {
        replace(path:String): void;
        destroy(): void;
    }

    interface IInterchangeOptions {
        rules?: Array<any>
    }

    // http://foundation.zurb.com/sites/docs/magellan.html#javascript-reference
    export interface Magellan {
        calcPoints(): void;
        reflow(): void;
        destroy(): void;
    }

    interface IMagellanOptions {
        animationDuration?: number;
        animationEasing?: String;
        threshold?: number;
        activeClass?: String;
        deepLinking?: boolean;
    }

    // http://foundation.zurb.com/sites/docs/offcanvas.html#javascript-reference
    export interface OffCanvas {
        open(event:Object, trigger:JQuery): void;
        toggle(event:Object, trigger:JQuery): void;
        close(): void;
        destroy(): void;
    }

    interface IOffCanvasOptions {
        closeOnClick?: boolean;
        transitionTime?: number;
        position?: String;
        forceTop?: boolean;
        isRevealed?: boolean;
        revealOn?: String;
        autoFocus?: boolean;
        revealClass?: String;
    }

    // http://foundation.zurb.com/sites/docs/orbit.html#javascript-reference
    export interface Orbit {
        changeSlide(isLTR:boolean, chosenSlide?:Object, idx?:number): void;
        geoSync(): void;
        destroy(): void;
    }

    interface IOrbitOptions {
        bullets?: boolean;
        navButtons?: boolean;
        animInFromRight?: String;
        animOutToRight?: String;
        animInFromLeft?: String;
        animOutToLeft?: String;
        autoPlay?: boolean;
        timerDelay?: number;
        infiniteWrap?: boolean;
        swipe?: boolean;
        pauseOnHover?: boolean;
        accessible?: boolean;
        containerClass?: String;
        slideClass?: String;
        boxOfBullets?: String;
        nextClass?: String;
        prevClass?: String;
    }

    // http://foundation.zurb.com/sites/docs/reveal.html#javascript-reference
    export interface Reveal {
        open(): void;
        toggle(): void;
        close(): void;
        destroy(): void;
    }

    interface IRevealOptions {
        animationIn?: String;
        animationOut?: String;
        showDelay?: number;
        hideDelay?: number;
        closeOnClick?: boolean;
        closeOnEsc?: boolean;
        multipleOpened?: boolean;
        vOffset?: number;
        hOffset?: number;
        fullScreen?: boolean;
        btmOffsetPct?: number;
        overlay?: boolean;
        resetOnClose?: boolean;
    }

    // http://foundation.zurb.com/sites/docs/slider.html#javascript-reference
    export interface Slider {
        destroy(): void;
    }

    interface ISliderOptions {
        start?: number;
        end?: number;
        step?: number;
        initialStart ?: number;
        initialEnd?: number;
        binding?: boolean;
        clickSelect?: boolean;
        vertical?: boolean;
        draggable?: boolean;
        disabled?: boolean;
        doubleSided?: boolean;
        decimal?: number;
        moveTime?: number;
        disabledClass?: String;
    }

    // http://foundation.zurb.com/sites/docs/sticky.html#javascript-reference
    export interface Sticky {
        _pauseListeners(scrollListener:String): void;
        _calc(checkSizes:boolean, scroll:number): void;
        destroy(): void;
        emCalc(number:any): void;
    }

    interface IStickyOptions {
        container?: String;
        stickTo?: String;
        anchor?: String;
        topAnchor?: String;
        btmAnchor?: String;
        marginTop?: number;
        marginBottom?: number;
        stickyOn?: String;
        stickyClass?: String;
        containerClass?: String;
        checkEvery?: number;
    }

    // http://foundation.zurb.com/sites/docs/tabs.html#javascript-reference
    export interface Tabs {
        _handleTabChange($target:JQuery): void;
        selectTab($target:JQuery): void;
        destroy(): void;
    }

    interface ITabsOptions {
        animate?: boolean;
    }

    // http://foundation.zurb.com/sites/docs/toggler.html#javascript-reference
    export interface Toggler {
        toggle(): void;
        destroy(): void;
    }

    interface ITogglerOptions {
        animate?: boolean;
    }

    // http://foundation.zurb.com/sites/docs/tooltip.html#javascript-reference
    export interface Tooltip {
        show(): void;
        hide() =>void;
        toggle(): void;
        destroy(): void;
    }

    interface ITooltipOptions {
        hoverDelay?: number;
        fadeInDuration?: number;
        fadeOutDuration?: number;
        disableHover?: boolean;
        templateClasses?: String;
        tooltipClass?: String;
        triggerClass?: String;
        showOn?: String;
        template?: String;
        tipText?: String;
        clickOpen?: boolean;
        positionClass?: String;
        vOffset?: number;
        hOffset?:number;
    }

    // Utilities
    // ---------

    export interface Box {
        ImNotTouchingYou(element:Object, parent?:Object, lrOnly?:boolean, tbOnly?:boolean): boolean;
        GetDimensions(element:Object): Object;
        GetOffsets(element:Object, anchor:Object, position:String, vOffset:number, hOffset:number, isOverflow:boolean): Object;
    }

    export interface KeyBoard {
        parseKey(event:any): String;
        findFocusable($element:Object): Object;
    }

    export interface MediaQuery {
        get(size:String): String;
        atLeast(size:String): boolean;
        queries:Array<any>;
        current:any;
    }

    export interface Motion {
        animateIn(element:Object, animation:any, cb:Function): void;
        animateOut(element:Object, animation:any, cb:Function): void;
    }

    interface Move {
        // TODO
    }

    interface Nest {
        // TODO
    }

    export interface Timer {
        start(): void;
        restart(): void;
        pause(): void;
    }

    interface Touch {
        // TODO :extension on jQuery
    }

    interface Triggers {
        // TODO :extension on jQuery
    }

    interface FoundationStatic {
        version : String;

        rtl(): boolean;
        plugin(plugin:Object, name:String): void;
        registerPlugin(plugin:Object): void;
        unregisterPlugin(plugin:Object): void;
        GetYoDigits(length:number, namespace?:String): String;
        reflow(elem:Object, plugins?:Array<String>|String): void;
        getFnName(fn:String): String;
        transitionend(): String;

        util : {
            throttle(func:(...args:any[]) => any, delay:number) (...args:any[]) => any;
        };
        onImagesLoaded(images:Object, cb:Function): void;

        Abide(element:Object, options?:IAbideOptions): Foundation.Abide;
        Accordion(element:Object, options?:IAccordionOptions): Foundation.Accordion;
        Dropdown(element:Object, options?:IDropdownOptions): Foundation.Dropdown;
        DropdownMenu(element:Object, options?:IDropdownMenuOptions): Foundation.DropdownMenu;
        Equalizer(element:Object, options?:IEqualizerOptions): Foundation.Equalizer;
        Interchange(element:Object, options?:IInterChangeOptions): Foundation.Interchange;
        Magellan(element:Object, options?:IMagellanOptions): Foundation.Magellan;
        OffCanvas(element:Object, options?:IOffCanvasOptions): Foundation.OffCanvas;
        Orbit(element:Object, options?:IOrbitOptions): Foundation.Orbit;
        Reveal(element:Object, options?:IRevealOptions): Foundation.Reveal;
        Slider(element:Object, options?:ISliderOptions): Foundation.Slider;
        Sticky(element:Object, options?:IStickyOptions): Foundation.Sticky;
        Tabs(element:Object, options?:ITabsOptions): Foundation.Tabs;
        Toggler(element:Object, options?:ITogglerOptions): Foundation.Toggler;
        Tooltip(element:Object, options?:ITooltipOptions): Foundation.Tooltip;

        // utils
        Box: Foundation.Box;
        KeyBoard: Foundation.Box;
        MediaQuery: Foundation.MediaQuery;
        Motion: Foundation.Motion;
        Move: Foundation.Move;
        Nest: Foundation.Nest;
        Timer: Foundation.Timer;
        Touch: Foundation.Touch;
        Triggers: Foundation.Triggers;

    }
}

interface JQuery {
    foundation(method?:String|Array<any>) : JQuery;
}

declare var Foundation:Foundation.FoundationStatic;
