import Nav from "../../components/layout/nav/nav";

export default function PageLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            {props.children}
        </>
    );
}
