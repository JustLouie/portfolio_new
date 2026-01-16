

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container m-auto px-4">
            {children}
        </div>
    )
}

export default Container;