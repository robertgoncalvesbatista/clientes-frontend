import FooterComponent from "../../components/footer";
import HeaderComponent from "../../components/header";

import { ContainerHome } from "./styles";

function Home() {
    return (
        <>
            <HeaderComponent />

            <ContainerHome>
                <h1>Centered hero</h1>

                <div>
                    <p>Quickly design and customize responsive mobile-first sites with Bootstrap,
                        the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                    <div>
                        <button>Primary button</button>
                        <button>Secondary</button>
                    </div>
                </div>
            </ContainerHome>

            <FooterComponent />
        </>
    );
}

export default Home;