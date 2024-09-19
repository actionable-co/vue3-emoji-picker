import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { WritableComputedRef } from 'vue';

declare type ColorTheme = 'dark' | 'light' | 'auto';

declare const _default: DefineComponent<ExtractPropTypes<    {
native: {
type: BooleanConstructor;
default: boolean;
};
hideSearch: {
type: BooleanConstructor;
default: boolean;
};
hideGroupIcons: {
type: BooleanConstructor;
default: boolean;
};
hideGroupNames: {
type: BooleanConstructor;
default: boolean;
};
staticTexts: {
type: ObjectConstructor;
default: () => {};
};
disableStickyGroupNames: {
type: BooleanConstructor;
default: boolean;
};
disabledGroups: {
type: ArrayConstructor;
default: () => never[];
};
groupNames: {
type: ObjectConstructor;
default: () => {};
};
disableSkinTones: {
type: BooleanConstructor;
default: boolean;
};
text: {
type: StringConstructor;
default: string;
};
mode: {
type: StringConstructor;
default: string;
};
offset: {
type: NumberConstructor;
default: number;
};
additionalGroups: {
type: ObjectConstructor;
default: () => {};
};
groupOrder: {
type: ArrayConstructor;
default: () => never[];
};
groupIcons: {
type: ObjectConstructor;
default: () => {};
};
pickerType: {
type: StringConstructor;
default: string;
};
displayRecent: {
type: BooleanConstructor;
default: boolean;
};
theme: {
type: PropType<ColorTheme>;
default: string;
};
}>, {
type: string;
input: Ref<string, string>;
onChangeText: (text: string | undefined) => void;
onBlurText: (text: string | undefined) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
'update:text': (text: string) => true;
'blur:text': (text: string) => true;
select: (emoji: EmojiExt) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
native: {
type: BooleanConstructor;
default: boolean;
};
hideSearch: {
type: BooleanConstructor;
default: boolean;
};
hideGroupIcons: {
type: BooleanConstructor;
default: boolean;
};
hideGroupNames: {
type: BooleanConstructor;
default: boolean;
};
staticTexts: {
type: ObjectConstructor;
default: () => {};
};
disableStickyGroupNames: {
type: BooleanConstructor;
default: boolean;
};
disabledGroups: {
type: ArrayConstructor;
default: () => never[];
};
groupNames: {
type: ObjectConstructor;
default: () => {};
};
disableSkinTones: {
type: BooleanConstructor;
default: boolean;
};
text: {
type: StringConstructor;
default: string;
};
mode: {
type: StringConstructor;
default: string;
};
offset: {
type: NumberConstructor;
default: number;
};
additionalGroups: {
type: ObjectConstructor;
default: () => {};
};
groupOrder: {
type: ArrayConstructor;
default: () => never[];
};
groupIcons: {
type: ObjectConstructor;
default: () => {};
};
pickerType: {
type: StringConstructor;
default: string;
};
displayRecent: {
type: BooleanConstructor;
default: boolean;
};
theme: {
type: PropType<ColorTheme>;
default: string;
};
}>> & Readonly<{
onSelect?: ((emoji: EmojiExt) => any) | undefined;
"onUpdate:text"?: ((text: string) => any) | undefined;
"onBlur:text"?: ((text: string) => any) | undefined;
}>, {
native: boolean;
hideSearch: boolean;
hideGroupIcons: boolean;
hideGroupNames: boolean;
staticTexts: Record<string, any>;
disabledGroups: unknown[];
groupNames: Record<string, any>;
displayRecent: boolean;
additionalGroups: Record<string, any>;
groupOrder: unknown[];
groupIcons: Record<string, any>;
mode: string;
disableStickyGroupNames: boolean;
text: string;
disableSkinTones: boolean;
offset: number;
pickerType: string;
theme: ColorTheme;
}, {}, {
PickerRoot: DefineComponent<ExtractPropTypes<    {
type: {
type: StringConstructor;
default: string;
};
text: {
type: StringConstructor;
default: string;
};
additionalGroups: {
type: ObjectConstructor;
default: () => {};
};
groupOrder: {
type: ArrayConstructor;
default: () => never[];
};
groupIcons: {
type: ObjectConstructor;
default: () => {};
};
groupNames: {
type: ObjectConstructor;
default: () => {};
};
}>, {
face: string;
open: Ref<boolean, boolean>;
onSelect: (emoji: EmojiExt) => void;
input: Ref<string, string>;
elem: Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
onBlurText: (event: any) => void;
button: Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
picker: Ref<any, any>;
isInputType: boolean;
onChangeText: (event: any) => void;
colorTheme: ComputedRef<any>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
select: (emoji: EmojiExt) => true;
'update:text': (value: string) => true;
'blur:text': (value: string) => true;
}, string, PublicProps, Readonly<ExtractPropTypes<    {
type: {
type: StringConstructor;
default: string;
};
text: {
type: StringConstructor;
default: string;
};
additionalGroups: {
type: ObjectConstructor;
default: () => {};
};
groupOrder: {
type: ArrayConstructor;
default: () => never[];
};
groupIcons: {
type: ObjectConstructor;
default: () => {};
};
groupNames: {
type: ObjectConstructor;
default: () => {};
};
}>> & Readonly<{
onSelect?: ((emoji: EmojiExt) => any) | undefined;
"onUpdate:text"?: ((value: string) => any) | undefined;
"onBlur:text"?: ((value: string) => any) | undefined;
}>, {
groupNames: Record<string, any>;
additionalGroups: Record<string, any>;
groupOrder: unknown[];
groupIcons: Record<string, any>;
text: string;
type: string;
}, {}, {
Header: DefineComponent<    {}, {
orderedGroups: Group[];
orderedKeys: any;
searchValue: WritableComputedRef<string, string>;
updateActiveGroup: (v: string) => void;
hasSearch: ComputedRef<boolean>;
hasGroupIcons: ComputedRef<boolean>;
placeholder: ComputedRef<any>;
icons: Record<string, string>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
Body: DefineComponent<    {}, {
emojis: ComputedRef<EmojiRecord>;
bodyInner: Ref<HTMLElement | null, HTMLElement | null>;
EMOJI_REMOTE_SRC: string;
GROUP_NAMES: GroupNames;
handleClick: (emoji: Emoji) => void;
handleError: (event: Event, unicode: string) => void;
handleMouseEnter: (emoji: Emoji) => void;
native: any;
unicodeToEmoji: unicodeToEmoji;
EMOJI_RESULT_KEY: string;
EMOJI_NAME_KEY: string;
hasGroupNames: ComputedRef<boolean>;
isSticky: ComputedRef<boolean>;
platform: string;
groupNames: any;
orderedKeys: string[];
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
select: (emoji: EmojiExt) => true;
}, string, PublicProps, Readonly<{}> & Readonly<{
onSelect?: ((emoji: EmojiExt) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
Footer: DefineComponent<    {}, {
emoji: ComputedRef<any>;
SKIN_TONES: string[];
updateSkinToneState: (open?: boolean) => void;
skinTone: Ref<boolean, boolean>;
stateSkinTone: ComputedRef<string>;
selectSkinTone: (tone: string) => void;
toggleSkinToneState: () => void;
EMOJI_RESULT_KEY: string;
EMOJI_NAME_KEY: string;
skinToneText: ComputedRef<any>;
hasSkinTones: ComputedRef<boolean>;
native: any;
unicodeToEmoji: unicodeToEmoji;
platform: string;
hasError: Ref<boolean, boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
}, {}, string, ComponentProvideOptions, true, {}, any>;
}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;

export declare interface Emoji {
    [EMOJI_NAME_KEY]: string[];
    [EMOJI_UNICODE_KEY]: string;
    [EMOJI_VARIATIONS_KEY]?: string[];
    [EMOJI_RESULT_KEY]: string;
    src?: string;
}

declare const EMOJI_EMOJI_KEY = "i";

declare const EMOJI_NAME_KEY = "n";

declare const EMOJI_RESULT_KEY = "r";

declare const EMOJI_SKIN_TONE_KEY = "t";

declare const EMOJI_UNICODE_KEY = "u";

declare const EMOJI_VARIATIONS_KEY = "v";

export declare interface EmojiExt extends Emoji {
    [EMOJI_SKIN_TONE_KEY]: string;
    [EMOJI_EMOJI_KEY]: string;
}

declare type EmojiRecord = Record<string, Emoji[]>;

declare interface Group {
    key: GroupKeys;
    title: string;
    u: string;
}

declare type GroupKeys = 'smileys_people' | 'animals_nature' | 'food_drink' | 'activities' | 'travel_places' | 'objects' | 'symbols' | 'flags' | 'recent';

declare type GroupNames = Record<GroupKeys, string>;

/**
 * Convert unicode to native emoji
 *
 * @param unicode - emoji unicode
 */
declare function unicodeToEmoji(unicode: string): string;

export { }
