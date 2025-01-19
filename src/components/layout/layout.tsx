import { ContentMain } from "./content/content_main";
import { Sidebar } from "./sidebar/sidebar";

export function Layout() {
    return (
        <>
            <Sidebar />
            <ContentMain />
        </>
    );
}