import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="blog-ques">
                <div className="blog-1 shadow m-3 p-4">
                    <h4> Difference between javascript and nodejs : </h4>
                    <p><b>Javascript:</b> javascript used for writing scripts on the website. It can only run in the browsers. It's used Client site or Font end. It's Change HTML and play with DOM.</p>
                    <p><b>Node JS: </b>It's Javascript run time environment.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is written in C, C++ and Javascript.It's used in server-side development.</p>
                </div>
                <div className="blog-1 shadow m-3 p-4">
                    <h4> When should you use nodejs and when should you use mongodb : </h4>
                    <p><b>Node JS with Mongodb:</b> Node JS is Javascript Run time environment to server site.It's run Javascript code in web server to web request Execute.</p>
                    <p><b>Mongodb: </b>Mongodb is NoSQL database.MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database</p>
                </div>
                <div className="blog-1 shadow m-3 p-4">
                    <h4> Differences between sql and nosql databases. : </h4>
                    <p><b>SQL:</b> SQL databases are relational.It's databases use structured query language and have a predefined schema.SQL databases are vertically scalable.SQL databases are table-based</p>
                    <p><b>No SQL: </b>NoSQL databases are non-relational.NoSQL databases have dynamic schemas for unstructured data.NoSQL databases are horizontally scalable.NoSQL databases are document, key-value, graph, or wide-column stores.It's store Json document.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;