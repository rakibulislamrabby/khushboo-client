import React from 'react';

const Blog = () => {
    return (
        <div className='container pb-5'>
            <h2 className='text-center text-success'>Questtion & ans section</h2>
            <div className="accordion mt-5 " id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h5> Difference between javascript and nodejs</h5>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <h6>Javascript</h6>
                                <li>It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.</li>
                                <li>We can only run JS on browsers.</li>
                                <li>The JS can easily add HTML and even play with the DOM.</li>
                                <li>Javascript is used in frontend development.</li>
                                <li>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </li>
                            </ul>
                            <ul>
                                <h6>Node.Js</h6>
                                <li>It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well.</li>
                                <li>NodeJS helps us run JS outside the browser as well.</li>
                                <li>The Node.JS, on the other hand, isn’t capable enough to add various HTML tags.</li>
                                <li>Nodejs is used in server-side development.</li>
                                <li>Nodejs is written in C, C++ and Javascript.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h5>When should you use nodejs and when should you use mongodb</h5>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p> First of all know What is Node.Js. Node.js is one of the most popular environments, taking the lead for the second consecutive year.  While JavaScript is a programming language, Node.js is an ecosystem built on JS, leveraging the V8 – Google server engine. V8 uses the JavaScript code to translate it into a faster machine code, readable by a computer.  </p>
                            <h6>When to use Node.js?</h6>
                            <p>API Application <br />
                                Node.js is also a great choice for constructing an API application with both relational and non-relational databases.
                                Why Node.js is suitable? It’s all because of the Single thread with event loop. This makes:

                                Node.js runs on a single thread which makes it easier to handle up to 10,000 concurrent requests.
                                All blocking I/O tasks are always being processed asynchronously by internal threads without interrupting the main thread <br />
                                <br />
                                Real-time applications <br />
                                Due to the event-driven and asynchronous nature, Node.js is good at building real-time applications like messaging, notifications delivery, live streaming and collaboration tools.

                                Let’s take messaging application as an example. Messaging application is:

                                lightweight
                                high traffic
                                data-intensive but requires light computation power
                            </p>
                            <h6>when should we use mongodb</h6>
                            <p>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.

                                MongoDB is the most popular of the new breed of non-relational NoSQL databases. Specifically, it’s a document database, also called a document-oriented database or a document store.

                                Documents hold semistructured data, usually represented in a format like JSON or XML, and each document is associated with a unique key.
                                Key values are typically a path or a URI that can be used to retrieve the associated document from the database.
                                The keys are indexed, making it efficient to retrieve the associated documents.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h5>Differences between SQL and NoSQL databases.</h5>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <h6>SQL</h6>
                                <li>SQL Databases are categorized as Relational Database Management System (RDBMS).</li>
                                <li>SQL databases have fixed or static or predefined schema.</li>
                                <li>SQL databases display data in form of tables so it is known as table-based database.</li>
                                <li>SQL databases are vertically scalable.</li>
                                <li>SQL databases are not best suited for hierarchical data storage.</li>
                            </ul>
                            <ul>
                                <h6>NoSQL</h6>
                                <li>NoSQL databases are categorized as Non-relational or distributed database system.</li>
                                <li>NoSQL databases have dynamic schema.</li>
                                <li>NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.</li>
                                <li>NoSQL databases are horizontally scalable.</li>
                                <li>NoSQL databases are best suited for hierarchical data storage.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div>




            </div>
            <div>


            </div>
        </div>
    );
};

export default Blog;