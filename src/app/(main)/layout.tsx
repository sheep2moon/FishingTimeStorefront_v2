import Nav from "../../components/layout/nav/nav";

export default function PageLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            <main className="w-screen max-w-screen-xl mx-auto">{props.children}</main>
        </>
    );
}
