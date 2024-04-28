const Blog = () => {
    return (
        <div style={{ paddingTop: '150px' }}>
            <div className="callout animation-element appear font-title section-title" >Blogs</div>
            <div className="blog-container">
                <div className="blog-start animation-element appear"></div>
                <div className="blog animation-element appear">
                    <img className="blog-people" src="/img/people/1.png" alt="people" />
                    <div className="blog-content">
                        <img className="blog-content-starter" src="/img/blog_starter.png" alt="people" />
                        I'm a designer focused on helping businesses increase their perceived value and stand out in a crowded marketplace. With a results-driven approach to help businesses achieve their goals.
                        I'm a designer focused on helping businesses increase their perceived value and stand out in a crowded marketplace. With a results-driven approach to help businesses achieve their goals.
                    </div>
                </div>
                <div className="blog animation-element appear">
                    <img className="blog-people" src="/img/people/1.png" alt="people" />
                    <div className="blog-content">
                        <img className="blog-content-starter" src="/img/blog_starter.png" alt="people" />
                        I'm a designer focused on helping businesses increase their perceived value and stand out in a crowded marketplace. With a results-driven approach to help businesses achieve their goals.
                        I'm a designer focused on helping businesses increase their perceived value and stand out in a crowded marketplace. With a results-driven approach to help businesses achieve their goals.
                    </div>
                </div>
                <div className="blog animation-element appear">
                    <img className="blog-people" src="/img/people/1.png" alt="people" />
                    <div className="blog-content">
                        <img className="blog-content-starter" src="/img/blog_starter.png" alt="people" />
                        I'm a designer focused on helping businesses increase their perceived value and stand out in a crowded marketplace. With a results-driven approach to help businesses achieve their goals.
                        I'm a designer focused on helping businesses increase their perceived value and stand out in a crowded marketplace. With a results-driven approach to help businesses achieve their goals.
                    </div>
                </div>
                <div className="blog-end animation-element appear"></div>
            </div>
            <div style={{ paddingTop: '100px' }}>
                <button className="btn animation-element appear">VIEW MORE</button>
            </div>

        </div>

    )
}

export default Blog;