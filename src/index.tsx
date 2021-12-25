import { render } from "react-dom";

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

serviceWorkerRegistration.register();
