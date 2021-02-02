import "./App.css";
import { Route, Switch } from "react-router-dom";
import BlogContainer from "./container/Blog/blog.container";
import Post from "./component/Blog/post/post";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={BlogContainer} />
      <Route path="/:slug" component={Post} />
    </Switch>
  );
}

export default App;
