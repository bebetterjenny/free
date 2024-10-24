import { onInit, Show, useMetadata, useStore } from '@builder.io/mitosis';
import './text.css';
import type { TextProps, TextState } from './text.model';
import { textService } from './text.service';

useMetadata({ isAttachedToShadowDom: true });

export default function Text(props: TextProps) {
  // const state = useStore<TextState>({
  //   get classes() {
  //     return textService.getClasses(props.variant, props.disabled, props.className || props.classList);
  //   },
  //   styles: { container: null }
  // });

  // onInit(() => {
  //   async function getData() {
  //     state.styles = await textInputService.getStyles(props.name, props.variant);
  //   }

  //   getData();
  // });

  return (
    // <div class={state.classes.base}>
    <input type="text" />
    // </div>
  );
}
