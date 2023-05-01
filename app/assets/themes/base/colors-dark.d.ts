// types
interface ColorsTypes {
  main: string;
  focus: string;
}

interface GradientsTypes {
  main: string;
  state: string;
}

interface SocialMediaColorsTypes {
  main: string;
  dark: string;
}

interface BadgeColorsTypes {
  background: string;
  text: string;
}

export default interface Types {
  background: {
    default: string;
    sidenav?: string;
    card?: string;
  };

  white: {
    main: string;
    focus: string;
  };

  text: {
    main: string;
    focus: string;
    primary?: string;
    secondary?: string;
    disabled?: string;
  };

  transparent: {
    main: string;
  };

  black: {
    light: string;
    main: string;
    focus: string;
  };

  primary: ColorsTypes;
  secondary: ColorsTypes;
  info: ColorsTypes;
  success: ColorsTypes;
  warning: ColorsTypes;
  error: ColorsTypes;
  light: ColorsTypes;
  dark: ColorsTypes;
  grey: {
    [key: string | number]: string;
  };

  gradients: {
    primary: GradientsTypes;
    secondary: GradientsTypes;
    info: GradientsTypes;
    success: GradientsTypes;
    warning: GradientsTypes;
    error: GradientsTypes;
    light: GradientsTypes;
    dark: GradientsTypes;
  };

  socialMediaColors: {
    facebook: SocialMediaColorsTypes;
    twitter: SocialMediaColorsTypes;
    instagram: SocialMediaColorsTypes;
    linkedin: SocialMediaColorsTypes;
    pinterest: SocialMediaColorsTypes;
    youtube: SocialMediaColorsTypes;
    vimeo: SocialMediaColorsTypes;
    slack: SocialMediaColorsTypes;
    dribbble: SocialMediaColorsTypes;
    github: SocialMediaColorsTypes;
    reddit: SocialMediaColorsTypes;
    tumblr: SocialMediaColorsTypes;
  };

  badgeColors: {
    primary: BadgeColorsTypes;
    secondary: BadgeColorsTypes;
    info: BadgeColorsTypes;
    success: BadgeColorsTypes;
    warning: BadgeColorsTypes;
    error: BadgeColorsTypes;
    light: BadgeColorsTypes;
    dark: BadgeColorsTypes;
  };

  coloredShadows: {
    [key: string]: string;
  };

  inputBorderColor: string;
  tabs: {
    indicator: {
      boxShadow: string;
    };
  };
}
