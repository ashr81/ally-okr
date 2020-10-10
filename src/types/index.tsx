import {
  ShadowProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  TypographyProps,
  PositionProps,
  FlexboxProps,
} from 'styled-system';

export interface IBoxProps extends
  ShadowProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  BorderProps,
  PositionProps {
    cursor?: 'pointer'
}

export interface ITextProps extends IBoxProps {
  as: 'p' | 'h3' | 'h6'
}
export interface IFlexboxProps extends IBoxProps, FlexboxProps {}


export interface IAvatarProps extends LayoutProps {}


export interface IOKRDataType {
  id: string;
  category: string;
  title: string;
  metric_name: string;
  metric_start: string;
  metric_target: string;
  parent_objective_id: string;
  archived: string;
}

export interface IOKRGroupData extends IOKRDataType {
  keyResults: IOKRDataType[]
}

export interface IOKRGroupTemplateProps {
  data: IOKRGroupData[];
}
