// Type definitions for react-css-transition-replace 2.0.1
// Project: http://marnusw.github.io/react-css-transition-replace/
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";
import * as CSSTransitionGroup from "react-addons-css-transition-group";

declare namespace CSSTransitionReplace {
    interface Props extends CSSTransitionGroup.CSSTransitionGroupProps {
        overflowHidden?: boolean
    }
}

declare var CSSTransitionReplace: CSSTransitionReplace;
type CSSTransitionReplace = React.ComponentClass<CSSTransitionReplace.Props>;
export = CSSTransitionReplace;
