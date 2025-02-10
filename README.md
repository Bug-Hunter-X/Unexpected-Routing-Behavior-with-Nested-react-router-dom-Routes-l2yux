# React Router Nested Routes Bug

This repository demonstrates a common issue with nested `Routes` components in `react-router-dom`.  Improper nesting can lead to routes failing to match correctly, resulting in unexpected rendering or 404 errors.  The example shows how a nested `Route` can unintentionally block the matching of parent route segments.

## Bug

The `NestedRoutesBug.js` file contains a React component that uses nested `Routes`. The `Users` component has a nested route for a specific user ID.  The issue arises because the nested route's path `/:userId` effectively overwrites the parent route's path `users/*`, preventing the parent route from ever being matched if there is no user ID supplied.

## Solution

The `NestedRoutesSolution.js` file demonstrates a solution to this problem.  Instead of nested `Routes`, it uses `useParams` to extract the `userId` from the URL path within the `Users` component. This solution allows the parent route to correctly match and pass its parameters to the child components. 