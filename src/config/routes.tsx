import { ReactElement, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RootLayout from "../layout/rootLayout";

const ROUTES: any = import.meta.glob("/src/pages/**/[a-z[]*.tsx", {
	eager: true,
}) as unknown as ReactElement[];

const routes = Object.keys(ROUTES).map((route) => {
	const path = route
		.replace(/\/src\/pages|index|\.tsx$/g, "")
		.replace(/\[\.{3}.+\]/, "*")
		.replace(/\[(.+)\]/, ":$1");

	return { Path: path, Element: ROUTES[route].default } as {
		Path: string;
		Element: React.JSXElementConstructor<any>;
	};
});

export const AppRoutes = () => {
	return (
		<RootLayout>
			<Suspense fallback={"Loading..."}>
				<BrowserRouter>
					<Routes>
						<Route>
							{routes.map(({ Path, Element }) => {
								return (
									<Route
										key={Path}
										path={Path}
										element={<Element />}
									/>
								);
							})}
						</Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</RootLayout>
	);
};
