import { tv } from 'tailwind-variants';

export const playerStyles = tv({
  base: [
    'custom-player-progress-tip',
    'custom-player-layer-lock',
    'custom-player-subtitle',
    'custom-player-layer-auto-playback',
    'custom-player-contextmenus',
    'custom-player-info',
    'custom-player-notice-inner',
    'custom-player-volume-control',
    'custom-player-icon-after',
    'custom-player-icon-before',
    'custom-player-control-after',
    'custom-player-control-before',
    '[&_.art-bottom]:via-default/60',
    '[&_.art-bottom]:to-default',
    '[&_.art-contextmenu]:!border-divider',
    '[&_.art-contextmenu]:!text-shadow-none',
    '[&_.art-control-topControlButtons]:before:via-default/[0.6]',
    '[&_.art-control-topControlButtons]:before:to-default',
    '[&_.art-layer-lock]:bg-background/[0.6]',
    '[&_.art-subtitle]:bg-player-subtitle-window-color',
    '[&_.art-subtitle]:!text-shadow-player',
    '[&_.art-bottom]:!bg-gradient-to-b',
    '[&_.art-bottom]:from-transparent',
    '[&_.art-control-topControlButtons]:!opacity-100',
    '[&_.art-control-topControlButtons]:before:absolute',
    '[&_.art-control-topControlButtons]:before:left-0',
    '[&_.art-control-topControlButtons]:before:top-0',
    '[&_.art-control-topControlButtons]:before:h-[100px]',
    '[&_.art-control-topControlButtons]:before:w-full',
    '[&_.art-control-topControlButtons]:before:bg-gradient-to-t',
    '[&_.art-control-topControlButtons]:before:from-transparent',
    '[&_.art-control-topControlButtons]:before:bg-top',
    '[&_.art-control-topControlButtons]:before:bg-repeat-x',
    "[&_.art-control-topControlButtons]:before:content-['']",
    '[&_.art-layer-mask]:hidden',
    '[&_.art-layer-mask]:bg-transparent',
    '[&_.art-layer-mask]:transition-all',
    '[&_.art-layer-mask]:duration-300',
    '[&_.art-layer-mask]:ease-in-out',
    '[&_.art-layer-miniTopControlButtons]:hidden',
    '[&_.art-layer-miniTopControlButtons]:transition-all',
    '[&_.art-layer-miniTopControlButtons]:duration-300',
    '[&_.art-layer-miniTopControlButtons]:ease-in-out',
    '[&_.art-layer-playPauseButton]:hidden',
    '[&_.art-layer-playPauseButton]:transition-all',
    '[&_.art-layer-playPauseButton]:duration-300',
    '[&_.art-layer-playPauseButton]:ease-in-out',
    '[&_.art-notice]:!justify-center',
    '[&_.art-video-player]:!font-sans',
  ],
  variants: {
    isMini: {
      true: [
        'custom-mini-player-hover',
        'h-[14.0625rem]',
        'w-[25rem]',
        'rounded-t-medium',
        '[&_.art-bottom]:!visible',
        '[&_.art-bottom]:!overflow-visible',
        '[&_.art-bottom]:!bg-none',
        '[&_.art-bottom]:!p-0',
        '[&_.art-bottom]:!opacity-100',
        '[&_.art-control-progress]:!h-[7px]',
        '[&_.art-control-progress]:!items-end',
        '[&_.art-controls]:hidden',
        '[&_.art-controls]:!transform-none',
        '[&_.art-mask]:!hidden',
        '[&_.art-progress]:!transform-none',
        '[&_.art-subtitle]:!bottom-[7px]',
      ],
      false: 'h-full w-full rounded-none',
    },
    isMobile: {
      true: [
        '[&_.art-bottom]:!p-0',
        '[&_.art-controls]:!px-[10px]',
        '[&_.art-progress-indicator]:!m-0',
      ],
      false: '',
    },
    isShowOverlay: {
      true: '[&_.art-video-player]:!z-[9999]',
      false: '',
    },
    isSettingsOpen: {
      true: '',
      false: '',
    },
    isPlayerFullScreen: {
      true: [
        '[&_.art-control-topControlButtons]:block',
        '[&_.art-control-topControlButtons]:before:block',
      ],
      false: [
        '[&_.art-control-topControlButtons]:hidden',
        '[&_.art-control-topControlButtons]:before:hidden',
      ],
    },
    showSubtitle: {
      true: '[&_.art-subtitle]:!flex',
      false: '[&_.art-subtitle]:!hidden',
    },
  },
  compoundVariants: [
    {
      isMini: true,
      isSettingsOpen: true,
      class: [
        '[&_.art-layer-mask]:bg-background/[0.6]',
        '[&_.art-layer-mask]:block',
        '[&_.art-layer-miniTopControlButtons]:block',
      ],
    },
    {
      isMobile: true,
      isPlayerFullScreen: false,
      class: [
        '[&_.art-bottom]:!flex-col-reverse',
        '[&_.art-bottom]:!justify-start',
        '[&_.art-bottom]:!overflow-visible',
      ],
    },
  ],
});
