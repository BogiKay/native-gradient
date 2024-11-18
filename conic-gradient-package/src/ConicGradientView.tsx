import * as React from 'react';
import type {ColorValue} from 'react-native';
import {processColor} from 'react-native';

import ConicGradientViewNativeComponent from './ConicGradientViewNativeComponent';

type Props = React.ComponentProps<typeof ConicGradientViewNativeComponent>;

export class ConicGradientView extends React.Component<Props> {
  render() {
    const colors = this.props.colors.map(
      processColor,
    ) as ReadonlyArray<ColorValue>;
    console.log('colors:', colors);
    console.log('not modified colors:', this.props.colors);
    return <ConicGradientViewNativeComponent {...this.props} />;
  }
}
