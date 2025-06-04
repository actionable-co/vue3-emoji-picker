import { Emoji, EmojiRecord, Group, GroupKeys } from './types'
import {
  SKIN_TONE_NEUTRAL,
  EMOJI_VARIATIONS_KEY,
  EMOJI_UNICODE_KEY,
  EMOJI_NAME_KEY,
  EMOJI_RESULT_KEY,
} from './constant'

/**
 * Convert unicode to native emoji
 *
 * @param unicode - emoji unicode
 */
export function unicodeToEmoji(unicode: string) {
  let code = unicode
    .split('-')
    .map((hex) => parseInt(hex, 16))
    .map((hex) => String.fromCodePoint(hex))
    .join('')

  return code
}

/**
 * Filter emoji by search keyword
 *
 * @param emojis - Emoji data
 * @param keyword - filter keyword
 * @param skinTone - current skin tones
 * @param disabledGroups - groups to be excluded
 */
export function filterEmojis(
  emojis: EmojiRecord,
  keyword: string,
  skinTone: string,
  disabledGroups: Group[] = []
): EmojiRecord {
  const _emojiData = {} as EmojiRecord
  let skippedEmoji = ['263a-fe0f']
  // Edge 20+
  var isEdge = window.navigator.userAgent.indexOf('Edge') !== -1

  // Chrome 1 - 79
  var isChrome = window.navigator.userAgent.indexOf('Chrome') !== -1

  // Edge (based on chromium) detection
  var isEdgeChromium = isChrome && window.navigator.userAgent.indexOf('Edge') != -1

  Object.keys(emojis).forEach((key) => {
    // if (skipEmojis.includes[key]) {
    //   return;
    // }
    /**
     * Exclude disabled emoji group from the record
     */
    // @ts-ignore
    if (disabledGroups.includes(key)) {
      return
    }

    const _emojis: Emoji[] = []
    emojis[key as GroupKeys].forEach((emoji) => {
      // if search key match
      if (emoji[EMOJI_NAME_KEY][0].includes(keyword.toLocaleLowerCase())) {
        let result = emoji[EMOJI_UNICODE_KEY]
        if (
          skippedEmoji.includes(result) &&
          (isEdge || isChrome || isEdgeChromium)
        ) {
          return
        }
        // check skin tone
        if (
          skinTone !== SKIN_TONE_NEUTRAL &&
          Array.isArray(emoji[EMOJI_VARIATIONS_KEY])
        ) {
          const v_index =
            emoji[EMOJI_VARIATIONS_KEY]?.findIndex((v) =>
              v.includes(skinTone)
            ) || -1
          if (v_index !== -1 && emoji[EMOJI_VARIATIONS_KEY]) {
            // @ts-ignore
            result = emoji[EMOJI_VARIATIONS_KEY][v_index]
          }
        }

        return _emojis.push({
          ...emoji,
          [EMOJI_RESULT_KEY]: result,
        })
      }
    })

    if (_emojis.length) {
      _emojiData[key as GroupKeys] = _emojis
    }
  })
  return _emojiData
}

/**
 * Check if userAgent is mac.
 *
 * @return boolean;
 */
export function isMac() {
  let platform =
    // @ts-ignore
    window.navigator?.userAgentData?.platform || window.navigator?.platform || 'unknown'
  return platform.toUpperCase().indexOf('MAC') !== -1
}

/**
 * Change snake case to capitalisk words, e.g. my_custom_group to My Custom Group
 *
 * @returns string
 */
export function snakeToCapitalizedCase(string: string) {
  return string.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : ' ' + d.toUpperCase()
  )
}
