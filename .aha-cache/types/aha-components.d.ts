export declare function addToPortal(element: HTMLElement): void;

declare type AlertLevel = typeof alertLevel[number];

declare const alertLevel: readonly ["info", "warning", "success", "danger"];

declare type AlignContent = typeof alignContent[number];

declare const alignContent: readonly ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch", "baseline", "first baseline", "last baseline", "safe center", "unsafe center"];

declare type AlignItems = typeof alignItems[number];

declare const alignItems: readonly ["flex-start", "flex-end", "center", "stretch", "self-start", "self-end", "baseline", "first baseline", "last baseline", "safe center", "unsafe center"];

declare type Color = typeof colors[number];

declare const colors: readonly ["gray", "purple", "blue", "teal", "green", "light-green", "yellow", "orange", "red", "pink"];

export declare namespace Components {
    export interface AhaAlert {
        /**
         * Controls the display of a dismissal icon on the alert that will destroy the alert on click.
         */
        "dismissable": boolean;
        /**
         * Deprecated use the heading slot instead
         */
        "heading": string;
        /**
         * Controls the look and feel of the alert.  Select the appropriate type for your use case:    - `info`: When providing neutral or supplementary information.   - `success`: When indicating error-free completion of an action.   - `warning`: When caution is required from the user.   - `danger`: When indicating action failure or indicating caution relating to an unrecoverable or dangerous action.
         */
        "type": AlertLevel;
    }
    export interface AhaAvatar {
        /**
         * Set if you don't want a border.
         */
        "borderless"?: boolean;
        /**
         * If there is no image then this text label will be shown.
         */
        "label"?: string;
        /**
         * The user name. This is used as the alt text for the image and the title.
         */
        "name"?: string;
        /**
         * How big should the element is. Images inside will be stretched to a square with this width and height.
         */
        "size"?: number;
        /**
         * URL of the image you wish to display.
         */
        "src"?: string;
    }
    export interface AhaBox {
        /**
         * Changes the style of the `aha-box`, useful when you want to nest it inside another `aha-box`
         */
        "nested": boolean;
    }
    export interface AhaBreadcrumb {
    }
    export interface AhaBreadcrumbs {
    }
    export interface AhaButton {
        /**
         * Whether or not the button is currently in an "active" state. Changes the styling of the button.
         */
        "active": boolean;
        /**
         * @ignore
         */
        "disabled": boolean;
        /**
         * A URL string that turns the button into a clickable link, directing the user to a different URL.
         */
        "href": string | undefined;
        /**
         * The appearance of the button. The "default" kind is the default style.
         */
        "kind": Kind | DeprecatedKind;
        /**
         * An alternate appearance that removes the button's background.
         */
        "outline": boolean;
        /**
         * The size of the button.
         */
        "size": Size;
        /**
         * Whether or not to open an `<aha-button>` with an `href` attribute in a new window.
         */
        "target": '_blank' | undefined;
        /**
         * The type of button. The default is a plain "button", which does not trigger any form submit events when clicked.
         */
        "type": Type;
    }
    export interface AhaButtonGroup {
        /**
         * Automatically select the first button in the group
         */
        "autoSelect": boolean;
        /**
         * Display group of buttons as "tabs" that stretch the full width of the containing element.
         */
        "tabs": boolean;
    }
    export interface AhaCard {
        /**
         * Adds a selection outline to the card.
         */
        "selected": boolean;
        /**
         * Adds a shadow to the card.
         */
        "shadow": boolean;
    }
    export interface AhaCardField {
    }
    export interface AhaCardGroup {
    }
    export interface AhaCardRow {
    }
    export interface AhaCarousel {
        /**
         * Selected index of the carousel.
         */
        "selectedIndex": number;
    }
    export interface AhaCarouselItem {
    }
    export interface AhaColorDot {
        /**
         * Color of dot. Can choose a pre-defined option or set to any valid CSS color.
         */
        "color": Color;
        /**
         * Whether or not dot is showing pulsing animation.
         */
        "pulse": boolean;
        /**
         * Style of pulsing animation.
         */
        "pulseStyle": PulseStyle;
        /**
         * Size of outer dot. Accepts any valid CSS string (ex. `10px`, `2em`, `var(--my-cutom-height)`, etc.).
         */
        "size": string;
    }
    export interface AhaEmptyState {
    }
    export interface AhaEmptyStateJumbo {
        /**
         * Whether to render or not the media.
         */
        "hideMedia": boolean;
        /**
         * Whether to apply a box-shadow to the media-container
         */
        "mediaShadow": boolean;
    }
    export interface AhaEmptyStateLarge {
    }
    export interface AhaEmptyStateSmall {
    }
    export interface AhaFadeOut {
        /**
         * Amount of time (in seconds) to wait before the fade animation begins.
         */
        "delay": number;
        /**
         * Amount of time (in seconds) the animation should take.
         */
        "duration": number;
        /**
         * An animation will not start unless paused is `false`.
         */
        "paused": boolean;
        /**
         * The timing function to use for the animation.
         */
        "timingFunction": TimingFunction;
        /**
         * Whether or not the element will have a `hidden` attribute set when the animation finishes. This effectively removes it from the DOM.
         */
        "willDisappear": boolean;
    }
    export interface AhaField {
        /**
         * Whether or not the first input, select, textarea in the body of the <aha-field> component should be focused into when the component is done being mounted
         */
        "autofocus": boolean;
        /**
         * Whether or not a field has an error. `aria-invalid` is automatically added to child `input` tags when this attribute is truthy.
         */
        "error": boolean;
        /**
         * Whether field is laid out horizontally (default) or vertically.
         */
        "layout": Layout;
        /**
         * Whether or not a field is required. Provides a red `*` and a tooltip for accessibility.
         */
        "required": boolean;
        /**
         * Width of nested input field. Any valid CSS width value can be passed (50%, 20em, 10px, etc.).
         */
        "width": string;
    }
    export interface AhaFlex {
        /**
         * The distribution of space around child items along the cross axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
         */
        "alignContent": AlignContent;
        /**
         * How items are aligned along the flex container's cross axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
         */
        "alignItems": AlignItems;
        /**
         * The direction in which to layout children.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
         */
        "direction": FlexDirection;
        /**
         * The space to display between both rows and columns.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
         */
        "gap": string;
        /**
         * The distribution of space around items along the main axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
         */
        "justifyContent": JustifyContent;
        /**
         * Whether to wrap items onto multiple lines.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
         */
        "wrap": Wrap;
    }
    export interface AhaHelpPopover {
        /**
         * Deprecated, use heading slot instead.
         */
        "heading": string;
        /**
         * Controls whether the popover is open or closed. The component will manage this property when clicked. `is-open` can be used used to override control.
         */
        "isOpen": boolean;
        /**
         * Sets the width of the opened popover contents.
         */
        "openWidth": string;
    }
    export interface AhaHotkey {
        /**
         * Whether or not the "alt" key needs to be pressed to activate the hotkey.
         */
        "alt": boolean;
        /**
         * A callback function that will be fired when the hotkey is activated. Can be used instead of the `link` property above.
         */
        "callback"?: Function;
        /**
         * Whether or not the "control" key needs to be pressed to activate the hotkey.
         */
        "ctrl": boolean;
        /**
         * Whether or not the element is disabled.
         */
        "disabled": boolean;
        /**
         * The character _on the keyboard_ which must be pressed (in conjunction with the other control keys above) to activate the hotkey.
         */
        "hint"?: string;
        /**
         * The character which must be pressed (in conjunction with the other control keys above) to activate the hotkey.
         */
        "k"?: string;
        /**
         * A URL which will requested when the hotkey is activated. By default will be a GET request. Can be used instead of the `callback` property below.
         */
        "link"?: string;
        /**
         * Whether or not the "meta" key needs to be pressed to activate the hotkey.
         */
        "meta": boolean;
        /**
         * The request method by whith a link property above will be submitted when a hotkey is activated.
         */
        "method"?: Methods | '';
        /**
         * Whether or not the "shift" key needs to be pressed to activate the hotkey.
         */
        "shift": boolean;
    }
    export interface AhaIcon {
        /**
         * Icon to display in the aha-icon component.
         */
        "icon": string;
    }
    export interface AhaImageCarousel {
        /**
         * Selected index
         */
        "selectedIndex": number;
    }
    export interface AhaImageSelector {
        /**
         * Selected index
         */
        "selectedIndex": number;
    }
    export interface AhaImageSelectorItem {
        /**
         * Alt text of the image.
         */
        "imageAlt": string;
        /**
         * Whether this is the currently selected `aha-image-selector-item`.
         */
        "selected"?: boolean;
        /**
         * URL that specifies the path to the image.
         */
        "src": string;
    }
    export interface AhaImageTile {
        /**
         * Toggle `aha-image-tile` hover state
         */
        "hovered": boolean;
        /**
         * Specifies the URL of the page the link goes to.
         */
        "href": string;
        /**
         * Label rendered below the image and used inside the `alt` attribute.
         */
        "label": string;
        /**
         * Controls if the link should follow its default event or not.
         */
        "nofollow": boolean;
        /**
         * Specifies the ajax method to use
         */
        "post": boolean;
        /**
         * Whether the `<aha-image-tile>` is selected or not.
         */
        "selected": boolean;
        /**
         * URL that specifies the path to the selected image.
         */
        "selectedSrc": string;
        /**
         * URL that specifies the path to the image.
         */
        "src": string;
    }
    export interface AhaLink {
    }
    export interface AhaMenu {
        /**
         * When true, prevent a menu from being closed.
         */
        "disableClose": boolean;
        /**
         * Whether or not the menu is currently disabled.
         */
        "disabled": boolean;
        /**
         * _DEPRECATED:_ The label for the menu, which will be inserted into the opener button. The entire button can be overridden using the `control` slot.
         */
        "label"?: string | undefined;
        /**
         * Whether or not the menu is currently open.
         */
        "open": boolean;
        /**
         * Whether or not the menu is a submenu of another menu. If it is, then a caret icon is automatically added to the submenu's control.
         */
        "submenu": boolean;
    }
    export interface AhaMenuContent {
        /**
         * Whether or not the menu is currently disabled.
         */
        "disabled": boolean;
        /**
         * Whether or not the element is open. Typically reflects the state of the parent <aha-menu> component.
         */
        "open": boolean;
    }
    export interface AhaMenuGroup {
        /**
         * Whether or not the menu-group is disabled.
         */
        "disabled": boolean;
        /**
         * _DEPRECATED:_ The plain-text label for the menu group.
         */
        "label"?: string | undefined;
        /**
         * Whether or not the entire menu-group should be hidden when it has no content in its default slot. By default the menu-group **will be hidden** if there are no contents in the default slot.
         */
        "showWhenEmpty": boolean;
    }
    export interface AhaMenuItem {
        /**
         * Whether a menu item is disabled or not.
         */
        "disabled": boolean;
        /**
         * Whether a menu item is currently selected or not.
         */
        "selected": boolean;
        /**
         * Type of menu-item.
         */
        "type": Types | undefined;
    }
    export interface AhaModalBody {
    }
    export interface AhaModalFooter {
    }
    export interface AhaModalHeader {
        /**
         * The heading given to the default `aha-help-popover` component in the header.
         */
        "helpHeading": string;
        /**
         * The optional, secondary subheader of the modal;
         */
        "modalSubtitle": string;
        /**
         * The primary header of the modal.
         */
        "modalTitle": string;
    }
    export interface AhaPanel {
        /**
         * Whether or not the panel should have a subtle drop shadow.
         */
        "boxShadow": boolean;
        /**
         * The title of the panel, shown as a heading.
         */
        "heading": string;
        /**
         * The heading level (h1, h2, h3, etc). Useful for ensuring a consistent heading hierarchy.
         */
        "headingLevel": 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        /**
         * The ARIA role assigned to the container. By default, the container has a role of `region`, which implies that it is a crucial part of the document and allows screen readers to jump to it.
         */
        "role": string;
    }
    export interface AhaPill {
        /**
         * The color of the pill. Can be any CSS color string.
         */
        "color": string;
        /**
         * Whether the status is editable (show arrows icon).
         */
        "editable": boolean;
        /**
         * The size of the button.
         */
        "size": Size;
        /**
         * Whether the status is stacked in front of another one. Applies a special edge on the right side of the pill.
         */
        "stacked": boolean;
        /**
         * Changes the pill to just have a border and the text is the same colour as the border
         */
        "type": PillType;
    }
    export interface AhaPortalOutlet {
        /**
         * Lower any child elements that are currently lifted up inside the <aha-portal-outlet>.
         */
        "clear": () => Promise<void>;
    }
    export interface AhaProgressBar {
        /**
         * Number of records that are completed.
         */
        "completed": number;
        /**
         * Height of progress bar.
         */
        "height": string;
        /**
         * Hide all textual labels.
         */
        "noText": boolean;
        /**
         * Total number of records.
         */
        "total": number;
        /**
         * Text that will say how completed units are measured (ex. "%", "records", "features", etc.).
         */
        "units": string;
    }
    export interface AhaProgressStep {
        /**
         * Whether or not the step is the "current" step in the list. Note, you can also set the "step" attribute in the parent `<aha-progress-steps>` list and it will automatically set the "current" attribute for the specified step.
         */
        "current": boolean;
    }
    export interface AhaProgressSteps {
        /**
         * Get the index of the specified step.
         */
        "getStepIndex": (stepElement: HTMLAhaProgressStepElement) => Promise<number>;
        /**
         * Whether or not the current step is showing pulsing animation.
         */
        "pulse": boolean;
        /**
         * Style of pulsing animation.
         */
        "pulseStyle": PulseStyle;
        /**
         * Force all numbers in the list to recalculate their positions. Useful for when steps are added/removed from the list.
         */
        "renumberSteps": () => Promise<void>;
        /**
         * The current step in the progression. Note, you can also set the "current" attribute on any individual step and it will automatically set this value.
         */
        "step": number;
        /**
         * Style of progress steps.
         */
        "theme": Theme;
    }
    export interface AhaSearchField {
        /**
         * True if we are in a loading state, false otherwise
         */
        "loading": boolean;
        /**
         * Placeholder text for input
         */
        "placeholder": string | undefined;
    }
    export interface AhaSlider {
        /**
         * Where to show the optional label, 'above' or 'below'. Omit for no label.
         */
        "labeled": undefined | 'above' | 'below';
        /**
         * Max value on the input slider. Do not set if you are using ticks
         */
        "max": number | undefined;
        /**
         * Min value on the input slider. Do not set if you are using ticks
         */
        "min": number | undefined;
        /**
         * The initial value that the input will be set to
         */
        "startValue": number | undefined;
        /**
         * Step value on the input slider. Do not set if you are using ticks
         */
        "step": number | undefined;
        /**
         * Array of tick values for the slider to snap to on change of input. i.e. "[1, 2, 4, 5, 10]"
         */
        "ticks": string | undefined;
    }
    export interface AhaSpinner {
        /**
         * Sets the color of the spinner.
         */
        "color": string;
        /**
         * Sets the duration of the spinner animation (in seconds for 1 full loop of the animation).
         */
        "duration": number;
        /**
         * Sets the opacity of the spinner.
         */
        "opacity": number;
        /**
         * Pauses a spinner when set to `true`, animates when set to `false`.
         */
        "paused": boolean;
        /**
         * Sets the size of the spinner. By default it is 1.5 times the width of the `x` character in whatever font is applied. This way the size is relative to the surrounding text.
         */
        "size": string;
        /**
         * Sets the stroke of the spinner. By default it is the size of the spinner * 0.1
         */
        "stroke": string;
        /**
         * Adds a "track" to the spinner when set to true.
         */
        "track": boolean;
        /**
         * Sets the color of the track.
         */
        "trackColor": string;
        /**
         * Sets the opacity of the track.
         */
        "trackOpacity": number;
    }
    export interface AhaSwitch {
        /**
         * The state the switch is in
         */
        "active": boolean;
        /**
         * Whether or not the switch can be activated
         */
        "disabled": boolean;
    }
    export interface AhaSwitchGroup {
        /**
         * The state the switch group is in
         */
        "active": boolean;
    }
    export interface AhaTab {
        /**
         * @deprecated Use badge slot.
         */
        "badge"?: string;
        /**
         * Supply an `href` to have this tab operate as a link rather than a tab. If you've done this to one tab, you must do it to all tabs.
         */
        "href"?: string;
        /**
         * @ignore
         */
        "inMenu": boolean;
        /**
         * Equivalent to `<a rel>`. Has no effect unless `href` is set.
         */
        "rel"?: HTMLAnchorElement['rel'];
        /**
         * Whether this is the currently selected tab.
         */
        "selected": boolean;
        /**
         * Equivalent to `<a target>`. Has no effect unless `href` is set.
         */
        "target"?: HTMLAnchorElement['target'];
    }
    export interface AhaTabList {
        /**
         * @ignore
         */
        "selectTabAtIndex": (index: number) => Promise<void>;
    }
    export interface AhaTabPanel {
    }
    export interface AhaTabPanels {
        /**
         * Indicates the visible index.
         */
        "visibleIndex": number;
    }
    export interface AhaTabs {
        "selectedTabIndex": number;
    }
    export interface AhaTag {
        /**
         * The color of the tag. Can be any CSS color string.
         */
        "color": string;
        /**
         * Whether to have rounded corners
         */
        "rounded": boolean;
    }
    export interface AhaTags {
    }
    export interface AhaTimestamp {
        /**
         * By default, all instances of `aha-timestamp` utilize a shared, global "unit" of measurement. This global unit is set to whatever unit the last `aha-timestamp` added to the page has. By setting the `independent` attribute, you force this specific `aha-timestamp` to use its own, independent unit of measurement.
         */
        "independent": boolean;
        /**
         * The exact time of the timestamp, in milliseconds from the start of the epoch (00:00:00 UTC on 1 January 1970). Note that the `time` attribute should be relative to UTC, not the local time.
         */
        "time": number;
        /**
         * The "unit" of measurement in which the timestamp will be displayed.  An `aha-timestamp` will only have a default unit if it is an independent timestamp. Otherwise it will be assigned a unit on connectedCallback, and this assigned value will be the global shared "unit".  If an `aha-timestamp` is NOT an independent timestamp and it has a default unit set, then setting that unit will set the global shared "unit" to the same value
         */
        "unit": Unit | undefined;
    }
    export interface ExampleCode {
        /**
         * Determines if dark mode is active
         */
        "dark": boolean;
        /**
         * Determines if child code is prettified before being displayed. By default it is turned off because it does not work great with custom elements.
         */
        "pretty": boolean;
    }
    export interface FaIcon {
        /**
         * Icon to display in the fa-icon component.
         */
        "icon": string;
    }
}

declare type DeprecatedKind = typeof deprecatedKinds[number];

declare const deprecatedKinds: readonly ["attribute", "menu-action", "menu-item", "grouped-menu-item"];

declare type FlexDirection = typeof flexDirection[number];

declare const flexDirection: readonly ["row", "column", "row-reverse", "column-reverse"];

declare namespace JSX_2 {
    interface AhaAlert {
        /**
         * Controls the display of a dismissal icon on the alert that will destroy the alert on click.
         */
        "dismissable"?: boolean;
        /**
         * Deprecated use the heading slot instead
         */
        "heading"?: string;
        /**
         * Controls the look and feel of the alert.  Select the appropriate type for your use case:    - `info`: When providing neutral or supplementary information.   - `success`: When indicating error-free completion of an action.   - `warning`: When caution is required from the user.   - `danger`: When indicating action failure or indicating caution relating to an unrecoverable or dangerous action.
         */
        "type"?: AlertLevel;
    }
    interface AhaAvatar {
        /**
         * Set if you don't want a border.
         */
        "borderless"?: boolean;
        /**
         * If there is no image then this text label will be shown.
         */
        "label"?: string;
        /**
         * The user name. This is used as the alt text for the image and the title.
         */
        "name"?: string;
        /**
         * How big should the element is. Images inside will be stretched to a square with this width and height.
         */
        "size"?: number;
        /**
         * URL of the image you wish to display.
         */
        "src"?: string;
    }
    interface AhaBox {
        /**
         * Changes the style of the `aha-box`, useful when you want to nest it inside another `aha-box`
         */
        "nested"?: boolean;
    }
    interface AhaBreadcrumb {
    }
    interface AhaBreadcrumbs {
    }
    interface AhaButton {
        /**
         * Whether or not the button is currently in an "active" state. Changes the styling of the button.
         */
        "active"?: boolean;
        /**
         * @ignore
         */
        "disabled"?: boolean;
        /**
         * A URL string that turns the button into a clickable link, directing the user to a different URL.
         */
        "href"?: string | undefined;
        /**
         * The appearance of the button. The "default" kind is the default style.
         */
        "kind"?: Kind | DeprecatedKind;
        /**
         * Event that we dispatch when a button has been clicked. We pass the host element as the event detail.
         */
        "onAha-button:click"?: (event: CustomEvent<HTMLAhaButtonElement>) => void;
        /**
         * An alternate appearance that removes the button's background.
         */
        "outline"?: boolean;
        /**
         * The size of the button.
         */
        "size"?: Size;
        /**
         * Whether or not to open an `<aha-button>` with an `href` attribute in a new window.
         */
        "target"?: '_blank' | undefined;
        /**
         * The type of button. The default is a plain "button", which does not trigger any form submit events when clicked.
         */
        "type"?: Type;
    }
    interface AhaButtonGroup {
        /**
         * Automatically select the first button in the group
         */
        "autoSelect"?: boolean;
        /**
         * Display group of buttons as "tabs" that stretch the full width of the containing element.
         */
        "tabs"?: boolean;
    }
    interface AhaCard {
        /**
         * Adds a selection outline to the card.
         */
        "selected"?: boolean;
        /**
         * Adds a shadow to the card.
         */
        "shadow"?: boolean;
    }
    interface AhaCardField {
    }
    interface AhaCardGroup {
    }
    interface AhaCardRow {
    }
    interface AhaCarousel {
        /**
         * Triggers before the active index changed.
         */
        "onAha-carousel:active-index-change"?: (event: CustomEvent<number>) => void;
        /**
         * Triggers after the active index changed.
         */
        "onAha-carousel:active-index-changed"?: (event: CustomEvent<number>) => void;
        /**
         * Selected index of the carousel.
         */
        "selectedIndex"?: number;
    }
    interface AhaCarouselItem {
    }
    interface AhaColorDot {
        /**
         * Color of dot. Can choose a pre-defined option or set to any valid CSS color.
         */
        "color": Color;
        /**
         * Whether or not dot is showing pulsing animation.
         */
        "pulse"?: boolean;
        /**
         * Style of pulsing animation.
         */
        "pulseStyle": PulseStyle;
        /**
         * Size of outer dot. Accepts any valid CSS string (ex. `10px`, `2em`, `var(--my-cutom-height)`, etc.).
         */
        "size": string;
    }
    interface AhaEmptyState {
    }
    interface AhaEmptyStateJumbo {
        /**
         * Whether to render or not the media.
         */
        "hideMedia"?: boolean;
        /**
         * Whether to apply a box-shadow to the media-container
         */
        "mediaShadow"?: boolean;
    }
    interface AhaEmptyStateLarge {
    }
    interface AhaEmptyStateSmall {
    }
    interface AhaFadeOut {
        /**
         * Amount of time (in seconds) to wait before the fade animation begins.
         */
        "delay"?: number;
        /**
         * Amount of time (in seconds) the animation should take.
         */
        "duration"?: number;
        /**
         * An animation will not start unless paused is `false`.
         */
        "paused"?: boolean;
        /**
         * The timing function to use for the animation.
         */
        "timingFunction"?: TimingFunction;
        /**
         * Whether or not the element will have a `hidden` attribute set when the animation finishes. This effectively removes it from the DOM.
         */
        "willDisappear"?: boolean;
    }
    interface AhaField {
        /**
         * Whether or not the first input, select, textarea in the body of the <aha-field> component should be focused into when the component is done being mounted
         */
        "autofocus"?: boolean;
        /**
         * Whether or not a field has an error. `aria-invalid` is automatically added to child `input` tags when this attribute is truthy.
         */
        "error"?: boolean;
        /**
         * Whether field is laid out horizontally (default) or vertically.
         */
        "layout"?: Layout;
        /**
         * Whether or not a field is required. Provides a red `*` and a tooltip for accessibility.
         */
        "required": boolean;
        /**
         * Width of nested input field. Any valid CSS width value can be passed (50%, 20em, 10px, etc.).
         */
        "width": string;
    }
    interface AhaFlex {
        /**
         * The distribution of space around child items along the cross axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
         */
        "alignContent"?: AlignContent;
        /**
         * How items are aligned along the flex container's cross axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
         */
        "alignItems"?: AlignItems;
        /**
         * The direction in which to layout children.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
         */
        "direction"?: FlexDirection;
        /**
         * The space to display between both rows and columns.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
         */
        "gap"?: string;
        /**
         * The distribution of space around items along the main axis.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
         */
        "justifyContent"?: JustifyContent;
        /**
         * Whether to wrap items onto multiple lines.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
         */
        "wrap"?: Wrap;
    }
    interface AhaHelpPopover {
        /**
         * Deprecated, use heading slot instead.
         */
        "heading"?: string;
        /**
         * Controls whether the popover is open or closed. The component will manage this property when clicked. `is-open` can be used used to override control.
         */
        "isOpen"?: boolean;
        /**
         * Triggers when aha-help-popover is initially closed, but before it is not visible.
         */
        "onAha-help-popover:close"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when aha-help-popover is not visible.
         */
        "onAha-help-popover:closed"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when aha-help-popover is initially opened, but before it is visible.
         */
        "onAha-help-popover:open"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when aha-help-popover is visible
         */
        "onAha-help-popover:opened"?: (event: CustomEvent<any>) => void;
        /**
         * Sets the width of the opened popover contents.
         */
        "openWidth"?: string;
    }
    interface AhaHotkey {
        /**
         * Whether or not the "alt" key needs to be pressed to activate the hotkey.
         */
        "alt"?: boolean;
        /**
         * A callback function that will be fired when the hotkey is activated. Can be used instead of the `link` property above.
         */
        "callback"?: Function;
        /**
         * Whether or not the "control" key needs to be pressed to activate the hotkey.
         */
        "ctrl"?: boolean;
        /**
         * Whether or not the element is disabled.
         */
        "disabled"?: boolean;
        /**
         * The character _on the keyboard_ which must be pressed (in conjunction with the other control keys above) to activate the hotkey.
         */
        "hint"?: string;
        /**
         * The character which must be pressed (in conjunction with the other control keys above) to activate the hotkey.
         */
        "k"?: string;
        /**
         * A URL which will requested when the hotkey is activated. By default will be a GET request. Can be used instead of the `callback` property below.
         */
        "link"?: string;
        /**
         * Whether or not the "meta" key needs to be pressed to activate the hotkey.
         */
        "meta"?: boolean;
        /**
         * The request method by whith a link property above will be submitted when a hotkey is activated.
         */
        "method"?: Methods | '';
        /**
         * Whether or not the "shift" key needs to be pressed to activate the hotkey.
         */
        "shift"?: boolean;
    }
    interface AhaIcon {
        /**
         * Icon to display in the aha-icon component.
         */
        "icon"?: string;
    }
    interface AhaImageCarousel {
        /**
         * Selected index
         */
        "selectedIndex"?: number;
    }
    interface AhaImageSelector {
        /**
         * Triggers before the active index changed
         */
        "onAha-image-selector:active-index-change"?: (event: CustomEvent<number>) => void;
        /**
         * Triggers after the active index changed
         */
        "onAha-image-selector:active-index-changed"?: (event: CustomEvent<number>) => void;
        /**
         * Selected index
         */
        "selectedIndex"?: number;
    }
    interface AhaImageSelectorItem {
        /**
         * Alt text of the image.
         */
        "imageAlt": string;
        /**
         * Triggers after an aha-image-selector-item was selected.
         */
        "onAha-image-selector-item:selected"?: (event: CustomEvent<HTMLAhaImageSelectorItemElement>) => void;
        /**
         * Whether this is the currently selected `aha-image-selector-item`.
         */
        "selected"?: boolean;
        /**
         * URL that specifies the path to the image.
         */
        "src": string;
    }
    interface AhaImageTile {
        /**
         * Toggle `aha-image-tile` hover state
         */
        "hovered": boolean;
        /**
         * Specifies the URL of the page the link goes to.
         */
        "href": string;
        /**
         * Label rendered below the image and used inside the `alt` attribute.
         */
        "label": string;
        /**
         * Controls if the link should follow its default event or not.
         */
        "nofollow"?: boolean;
        /**
         * Specifies the ajax method to use
         */
        "post": boolean;
        /**
         * Whether the `<aha-image-tile>` is selected or not.
         */
        "selected": boolean;
        /**
         * URL that specifies the path to the selected image.
         */
        "selectedSrc": string;
        /**
         * URL that specifies the path to the image.
         */
        "src": string;
    }
    interface AhaLink {
    }
    interface AhaMenu {
        /**
         * When true, prevent a menu from being closed.
         */
        "disableClose"?: boolean;
        /**
         * Whether or not the menu is currently disabled.
         */
        "disabled"?: boolean;
        /**
         * _DEPRECATED:_ The label for the menu, which will be inserted into the opener button. The entire button can be overridden using the `control` slot.
         */
        "label"?: string | undefined;
        /**
         * Triggers when the menu is closed using the escape key.
         */
        "onAha-menu:cancel"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when the menu is initially closed but before it is hidden.
         */
        "onAha-menu:close"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when the menu is no longer visible on the page.
         */
        "onAha-menu:closed"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when the menu is initially opened but before it is visible.
         */
        "onAha-menu:open"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when the menu is visible on the page.
         */
        "onAha-menu:opened"?: (event: CustomEvent<any>) => void;
        /**
         * _DEPRECATED:_ Triggers when the menu is closed using the escape key. Has been replaced with the `aha-menu:cancel` event.
         */
        "onCancel"?: (event: CustomEvent<any>) => void;
        /**
         * _DEPRECATED:_ Triggers when the open state of the menu changes. Has been replaced with the `aha-menu:opened` event.
         */
        "onOpenChanged"?: (event: CustomEvent<boolean>) => void;
        /**
         * Whether or not the menu is currently open.
         */
        "open"?: boolean;
        /**
         * Whether or not the menu is a submenu of another menu. If it is, then a caret icon is automatically added to the submenu's control.
         */
        "submenu"?: boolean;
    }
    interface AhaMenuContent {
        /**
         * Whether or not the menu is currently disabled.
         */
        "disabled"?: boolean;
        /**
         * Triggers when the menu is closed using the escape key.
         */
        "onAha-menu-content:cancel"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when the menu is initially closed but before it is hidden.
         */
        "onAha-menu-content:close"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when the menu is no longer visible on the page.
         */
        "onAha-menu-content:closed"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when the menu is initially opened but before it is visible.
         */
        "onAha-menu-content:open"?: (event: CustomEvent<any>) => void;
        /**
         * Triggers when the menu is visible on the page.
         */
        "onAha-menu-content:opened"?: (event: CustomEvent<any>) => void;
        /**
         * Whether or not the element is open. Typically reflects the state of the parent <aha-menu> component.
         */
        "open"?: boolean;
    }
    interface AhaMenuGroup {
        /**
         * Whether or not the menu-group is disabled.
         */
        "disabled"?: boolean;
        /**
         * _DEPRECATED:_ The plain-text label for the menu group.
         */
        "label"?: string | undefined;
        /**
         * Whether or not the entire menu-group should be hidden when it has no content in its default slot. By default the menu-group **will be hidden** if there are no contents in the default slot.
         */
        "showWhenEmpty"?: boolean;
    }
    interface AhaMenuItem {
        /**
         * Whether a menu item is disabled or not.
         */
        "disabled"?: boolean;
        /**
         * Whether a menu item is currently selected or not.
         */
        "selected"?: boolean;
        /**
         * Type of menu-item.
         */
        "type"?: Types | undefined;
    }
    interface AhaModalBody {
    }
    interface AhaModalFooter {
    }
    interface AhaModalHeader {
        /**
         * The heading given to the default `aha-help-popover` component in the header.
         */
        "helpHeading": string;
        /**
         * The optional, secondary subheader of the modal;
         */
        "modalSubtitle": string;
        /**
         * The primary header of the modal.
         */
        "modalTitle": string;
        /**
         * Event fired when the user activates the close icon.
         */
        "onAha-modal-header:close"?: (event: CustomEvent<any>) => void;
    }
    interface AhaPanel {
        /**
         * Whether or not the panel should have a subtle drop shadow.
         */
        "boxShadow"?: boolean;
        /**
         * The title of the panel, shown as a heading.
         */
        "heading": string;
        /**
         * The heading level (h1, h2, h3, etc). Useful for ensuring a consistent heading hierarchy.
         */
        "headingLevel"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        /**
         * The ARIA role assigned to the container. By default, the container has a role of `region`, which implies that it is a crucial part of the document and allows screen readers to jump to it.
         */
        "role"?: string;
    }
    interface AhaPill {
        /**
         * The color of the pill. Can be any CSS color string.
         */
        "color": string;
        /**
         * Whether the status is editable (show arrows icon).
         */
        "editable"?: boolean;
        /**
         * The size of the button.
         */
        "size"?: Size;
        /**
         * Whether the status is stacked in front of another one. Applies a special edge on the right side of the pill.
         */
        "stacked"?: boolean;
        /**
         * Changes the pill to just have a border and the text is the same colour as the border
         */
        "type"?: PillType;
    }
    interface AhaPortalOutlet {
    }
    interface AhaProgressBar {
        /**
         * Number of records that are completed.
         */
        "completed"?: number;
        /**
         * Height of progress bar.
         */
        "height"?: string;
        /**
         * Hide all textual labels.
         */
        "noText"?: boolean;
        /**
         * Total number of records.
         */
        "total"?: number;
        /**
         * Text that will say how completed units are measured (ex. "%", "records", "features", etc.).
         */
        "units": string;
    }
    interface AhaProgressStep {
        /**
         * Whether or not the step is the "current" step in the list. Note, you can also set the "step" attribute in the parent `<aha-progress-steps>` list and it will automatically set the "current" attribute for the specified step.
         */
        "current"?: boolean;
    }
    interface AhaProgressSteps {
        /**
         * Whether or not the current step is showing pulsing animation.
         */
        "pulse"?: boolean;
        /**
         * Style of pulsing animation.
         */
        "pulseStyle": PulseStyle;
        /**
         * The current step in the progression. Note, you can also set the "current" attribute on any individual step and it will automatically set this value.
         */
        "step"?: number;
        /**
         * Style of progress steps.
         */
        "theme"?: Theme;
    }
    interface AhaSearchField {
        /**
         * True if we are in a loading state, false otherwise
         */
        "loading"?: boolean;
        /**
         * Triggers when a search happens
         */
        "onAha-search-field:search"?: (event: CustomEvent<any>) => void;
        /**
         * Placeholder text for input
         */
        "placeholder"?: string | undefined;
    }
    interface AhaSlider {
        /**
         * Where to show the optional label, 'above' or 'below'. Omit for no label.
         */
        "labeled"?: undefined | 'above' | 'below';
        /**
         * Max value on the input slider. Do not set if you are using ticks
         */
        "max"?: number | undefined;
        /**
         * Min value on the input slider. Do not set if you are using ticks
         */
        "min"?: number | undefined;
        "onAha-slider:clicked"?: (event: CustomEvent<number>) => void;
        /**
         * The initial value that the input will be set to
         */
        "startValue"?: number | undefined;
        /**
         * Step value on the input slider. Do not set if you are using ticks
         */
        "step"?: number | undefined;
        /**
         * Array of tick values for the slider to snap to on change of input. i.e. "[1, 2, 4, 5, 10]"
         */
        "ticks"?: string | undefined;
    }
    interface AhaSpinner {
        /**
         * Sets the color of the spinner.
         */
        "color"?: string;
        /**
         * Sets the duration of the spinner animation (in seconds for 1 full loop of the animation).
         */
        "duration"?: number;
        /**
         * Sets the opacity of the spinner.
         */
        "opacity"?: number;
        /**
         * Pauses a spinner when set to `true`, animates when set to `false`.
         */
        "paused"?: boolean;
        /**
         * Sets the size of the spinner. By default it is 1.5 times the width of the `x` character in whatever font is applied. This way the size is relative to the surrounding text.
         */
        "size"?: string;
        /**
         * Sets the stroke of the spinner. By default it is the size of the spinner * 0.1
         */
        "stroke"?: string;
        /**
         * Adds a "track" to the spinner when set to true.
         */
        "track"?: boolean;
        /**
         * Sets the color of the track.
         */
        "trackColor"?: string;
        /**
         * Sets the opacity of the track.
         */
        "trackOpacity"?: number;
    }
    interface AhaSwitch {
        /**
         * The state the switch is in
         */
        "active"?: boolean;
        /**
         * Whether or not the switch can be activated
         */
        "disabled"?: boolean;
        /**
         * Triggers when `<aha-switch>` is set to the "active" or "inactive" states.
         */
        "onAha-switch:change"?: (event: CustomEvent<HTMLAhaSwitchElement>) => void;
    }
    interface AhaSwitchGroup {
        /**
         * The state the switch group is in
         */
        "active"?: boolean;
        /**
         * Triggers when `<aha-switch-group>` is set to the "active" or "inactive" states.
         */
        "onAha-switch-group:change"?: (event: CustomEvent<HTMLAhaSwitchGroupElement>) => void;
    }
    interface AhaTab {
        /**
         * @deprecated Use badge slot.
         */
        "badge"?: string;
        /**
         * Supply an `href` to have this tab operate as a link rather than a tab. If you've done this to one tab, you must do it to all tabs.
         */
        "href"?: string;
        /**
         * @ignore
         */
        "inMenu"?: boolean;
        /**
         * @ignore
         */
        "onTabChosen"?: (event: CustomEvent<HTMLAhaTabElement>) => void;
        /**
         * Equivalent to `<a rel>`. Has no effect unless `href` is set.
         */
        "rel"?: HTMLAnchorElement['rel'];
        /**
         * Whether this is the currently selected tab.
         */
        "selected"?: boolean;
        /**
         * Equivalent to `<a target>`. Has no effect unless `href` is set.
         */
        "target"?: HTMLAnchorElement['target'];
    }
    interface AhaTabList {
        /**
         * @ignore
         */
        "onTabChosenAtIndex"?: (event: CustomEvent<number>) => void;
    }
    interface AhaTabPanel {
    }
    interface AhaTabPanels {
        /**
         * Indicates the visible index.
         */
        "visibleIndex"?: number;
    }
    interface AhaTabs {
        "selectedTabIndex"?: number;
    }
    interface AhaTag {
        /**
         * The color of the tag. Can be any CSS color string.
         */
        "color": string;
        /**
         * Whether to have rounded corners
         */
        "rounded"?: boolean;
    }
    interface AhaTags {
    }
    interface AhaTimestamp {
        /**
         * By default, all instances of `aha-timestamp` utilize a shared, global "unit" of measurement. This global unit is set to whatever unit the last `aha-timestamp` added to the page has. By setting the `independent` attribute, you force this specific `aha-timestamp` to use its own, independent unit of measurement.
         */
        "independent"?: boolean;
        /**
         * The exact time of the timestamp, in milliseconds from the start of the epoch (00:00:00 UTC on 1 January 1970). Note that the `time` attribute should be relative to UTC, not the local time.
         */
        "time"?: number;
        /**
         * The "unit" of measurement in which the timestamp will be displayed.  An `aha-timestamp` will only have a default unit if it is an independent timestamp. Otherwise it will be assigned a unit on connectedCallback, and this assigned value will be the global shared "unit".  If an `aha-timestamp` is NOT an independent timestamp and it has a default unit set, then setting that unit will set the global shared "unit" to the same value
         */
        "unit"?: Unit | undefined;
    }
    interface ExampleCode {
        /**
         * Determines if dark mode is active
         */
        "dark": boolean;
        /**
         * Determines if child code is prettified before being displayed. By default it is turned off because it does not work great with custom elements.
         */
        "pretty": boolean;
    }
    interface FaIcon {
        /**
         * Icon to display in the fa-icon component.
         */
        "icon"?: string;
    }
    interface IntrinsicElements {
        "aha-alert": AhaAlert;
        "aha-avatar": AhaAvatar;
        "aha-box": AhaBox;
        "aha-breadcrumb": AhaBreadcrumb;
        "aha-breadcrumbs": AhaBreadcrumbs;
        "aha-button": AhaButton;
        "aha-button-group": AhaButtonGroup;
        "aha-card": AhaCard;
        "aha-card-field": AhaCardField;
        "aha-card-group": AhaCardGroup;
        "aha-card-row": AhaCardRow;
        "aha-carousel": AhaCarousel;
        "aha-carousel-item": AhaCarouselItem;
        "aha-color-dot": AhaColorDot;
        "aha-empty-state": AhaEmptyState;
        "aha-empty-state-jumbo": AhaEmptyStateJumbo;
        "aha-empty-state-large": AhaEmptyStateLarge;
        "aha-empty-state-small": AhaEmptyStateSmall;
        "aha-fade-out": AhaFadeOut;
        "aha-field": AhaField;
        "aha-flex": AhaFlex;
        "aha-help-popover": AhaHelpPopover;
        "aha-hotkey": AhaHotkey;
        "aha-icon": AhaIcon;
        "aha-image-carousel": AhaImageCarousel;
        "aha-image-selector": AhaImageSelector;
        "aha-image-selector-item": AhaImageSelectorItem;
        "aha-image-tile": AhaImageTile;
        "aha-link": AhaLink;
        "aha-menu": AhaMenu;
        "aha-menu-content": AhaMenuContent;
        "aha-menu-group": AhaMenuGroup;
        "aha-menu-item": AhaMenuItem;
        "aha-modal-body": AhaModalBody;
        "aha-modal-footer": AhaModalFooter;
        "aha-modal-header": AhaModalHeader;
        "aha-panel": AhaPanel;
        "aha-pill": AhaPill;
        "aha-portal-outlet": AhaPortalOutlet;
        "aha-progress-bar": AhaProgressBar;
        "aha-progress-step": AhaProgressStep;
        "aha-progress-steps": AhaProgressSteps;
        "aha-search-field": AhaSearchField;
        "aha-slider": AhaSlider;
        "aha-spinner": AhaSpinner;
        "aha-switch": AhaSwitch;
        "aha-switch-group": AhaSwitchGroup;
        "aha-tab": AhaTab;
        "aha-tab-list": AhaTabList;
        "aha-tab-panel": AhaTabPanel;
        "aha-tab-panels": AhaTabPanels;
        "aha-tabs": AhaTabs;
        "aha-tag": AhaTag;
        "aha-tags": AhaTags;
        "aha-timestamp": AhaTimestamp;
        "example-code": ExampleCode;
        "fa-icon": FaIcon;
    }
}
export { JSX_2 as JSX }

declare type JustifyContent = typeof justifyContent[number];

declare const justifyContent: readonly ["flex-start", "flex-end", "center", "left", "right", "space-between", "space-around", "space-evenly", "stretch", "baseline", "first baseline", "last baseline", "safe center", "unsafe center"];

declare type Kind = typeof kinds[number];

declare const kinds: readonly ["default", "primary", "secondary", "success", "warning", "danger", "gray", "link", "plain", "ghost"];

declare type Layout = typeof layouts[number];

declare const layouts: readonly ["horizontal", "vertical"];

declare type Methods = typeof methods[number];

declare const methods: readonly ["GET", "POST", "PUT", "DELETE"];

declare type PillType = typeof pillTypes[number];

declare const pillTypes: readonly ["solid", "outline"];

declare type PulseStyle = typeof pulseStyles[number];

declare const pulseStyles: readonly ["solid", "double", "dashed", "dotted"];

export declare function removeFromPortal(element: HTMLElement): Promise<PromiseSettledResult<unknown>[] | undefined>;

declare type Size = typeof sizes[number];

declare const sizes: readonly ["mini", "small", "medium", "large"];

declare type Theme = typeof themes[number];

declare const themes: readonly ["standard", "develop"];

declare type TimingFunction = typeof timingFunctions[number];

declare const timingFunctions: readonly ["ease", "linear", "ease-in", "ease-out", "ease-in-out"];

declare type Type = typeof types[number];

declare type Types = typeof types_2[number];

declare const types: readonly ["button", "submit"];

declare const types_2: readonly ["danger", "warning", "success", "info"];

declare type Unit = typeof units[number];

declare const units: readonly ["relative", "local", "utc", "epoch"];

declare type Wrap = typeof wrap[number];

declare const wrap: readonly ["nowrap", "wrap", "wrap-reverse"];

export { }

import type { HTMLAttributes } from 'react';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & HTMLAttributes<Element>;
};

declare global {
  namespace JSX {
    interface IntrinsicElements extends StencilToReact<JSX_2.IntrinsicElements> {}
  }
}
