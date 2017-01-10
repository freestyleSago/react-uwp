import * as React from "react";

import ElementState from "../../components/ElementState";
import { ThemeType } from "react-uwp/style/ThemeType";

let theme: ThemeType;
const defaultProps: MockProps = __DEV__ ? require("./devDefaultProps").default : {};

export interface DataProps {}
interface MockProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}
interface MockState {}

export default class Mock extends React.Component<MockProps, MockState> {
	static defaultProps: MockProps = { ...defaultProps };
	state: MockState = {};
	static contextTypes = { theme: React.PropTypes.object };

	render() {
		const { style, ...attributes } = this.props;
		theme = this.context.theme;

		return (
			<ElementState
				{...attributes}
				style={style}
			>
				<div>
					Mock
				</div>
			</ElementState>
		);
	}
}
