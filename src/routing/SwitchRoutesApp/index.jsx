import { Route, Switch } from "react-router";
import { HomePage } from "../../pages/HomePage";

export function SwitchRoutesApp() {
    return (
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    )
}