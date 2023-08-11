import NavigationPanel from "./NavigationPanel/NavigationPanel";
import PopularCategories from "./PopularCategories/PopularCategories";
import PrivilegeBlock from "./PrivilegeBlock/PriveilegeBlock";
import QueryBlock from "./QueryBlock/QueryBlock";

const MainPage = () => {
    return (
        <section>
            <NavigationPanel />
            <PopularCategories />
            <PrivilegeBlock />
            <QueryBlock />
        </section>
    )
}

export default MainPage;