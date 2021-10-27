<template>
  <div class="v3-body">
    <div class="v3-body-inner" ref="bodyInner">
      <div class="v3-group" v-for="(group, key) in emojis" :id="key" :key="key">
        <h5>{{ GROUP_NAMES[key] }}</h5>
        <div class="v3-emojis">
          <button
            @mouseenter="handleMouseEnter(emoji)"
            @click="handleClick(emoji)"
            v-for="emoji in group"
            :key="emoji.u"
          > <!-- @click=handleClick(emoji)-->
            <img
              @error="handleError($event, emoji.u)"
              :src="EMOJI_REMOTE_SRC + `/${emoji.u}.png`"
              :alt="emoji.n[0]"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, watch, ref, computed, getCurrentInstance} from "vue";
import state from "../store";
import { EmojiRecord, Emoji } from "../types";
import { EMOJI_REMOTE_SRC, GROUP_NAMES } from "../constant";
import { filterEmojis, unicodeToEmoji } from "../helpers";
import { updateEmoji } from "../store/composition"


export default defineComponent({
  name: "Body",
  setup() {
    const bodyInner = ref<HTMLElement | null>(null);
    const emojis = computed<EmojiRecord>(() => filterEmojis(state.emojis, state.search))
    const _this = getCurrentInstance()

    function handleMouseEnter(emoji: Emoji) {
      updateEmoji(emoji);
    }

    function handleClick(emoji: Emoji) {
      _this?.parent?.emit("select", {
        ...emoji,
        i: unicodeToEmoji(emoji.u)
      });
    }

    // @todo: handle error
    function handleError(event: Event, unicode: string) {
      console.log(unicode);
    }

    watch(
      () => state.activeGroup,
      () => {
        bodyInner.value
          ?.querySelector('#' + state.activeGroup)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    );

    return {
      emojis,
      bodyInner,
      EMOJI_REMOTE_SRC,
      GROUP_NAMES,
      handleClick,
      handleError,
      handleMouseEnter
    };
  }
});
</script>