import React from 'react'
import BottomLinks from './BottomLinks'
import './App.css';

const Resume = (props) => {


    return (<div id="ResumeDiv">
        <div>
            <div id="ResumeDownload">
                <h1>Resume</h1>
                <p>Take a look at my past experience.</p>
                <button id="ResumeButton" className="btn btn-primary">Download Resume</button>
            </div>
            <div id="ResumeContent">

                <div className="" data-block-type="2" id="">
                    <div>
                        <h4 id="BiancaTitle">Bianca Franco </h4>
                        <p className=""><span><strong classNameName="underline">EDUCATION</strong></span></p>
                        <p className=""><strong>University of East
                            London</strong>;
                        <strong className="pull-right">London, United Kingdom</strong>
                        </p>
                        <p className=""><em>MSc International Business Management

                            <p className="pull-right">January 2021</p>
                        </em></p>
                        <p className="">● Graduated
                        with Distinction Honours (Summa Cum Laude)</p>
                        <p className=""><em>BA Business Management &amp; Marketing
                            <p className="pull-right">July 2019</p>
                        </em></p>
                        <p className="">● Graduated
                        with First className Honours (Summa Cum Laude)</p>
                        <p className="">● Awarded with
                        Dean’s Award for Best Student on Marketing Programme</p>
                        <p className=""><span><strong className="underline">WORK EXPERIENCE</strong></span>
                        </p>
                        <p className=""><strong>University of East London
                            Marketing</strong><strong className="pull-right">
                                London, United Kingdom</strong></p>
                        <p className=""><em>Social Media Executive Assistant, Lead Social
                            Media Ambassador <p className="pull-right">February 2017 – Present</p></em></p>
                        <ul data-rte-list="default">
                            <li>
                                <p className="">Develop and curate daily calendar for
                                social media content in the form of short videos, photographs and graphics
                                adapted to various social media channels in UK, US, and international markets
                            </p>
                            </li>
                            <li>
                                <p className="">Analyze KPI’s, performance metrics and
                                insights through weekly statistics reports to ensure the success of each
                                channel’s content strategy and monitor social media engagement and community
                                management</p>
                            </li>
                            <li>
                                <p className="">Plan and execute blog posts, email
                                campaigns, photo and video shoots for social media content</p>
                            </li>
                            <li>
                                <p className="">Grew Facebook, LinkedIn, Instagram,
                                Tiktok, Youtube and Twitter channels by 35% in 6 months</p>
                            </li>
                            <li>
                                <p className="">Awarded Social Media Ambassador of the
                                Year in 2019 and 2020 for increasing Instagram engagement from 2% to 10% and
                                creating top 3 performing posts across all social media channels</p>
                            </li>
                        </ul>
                        <p className="">
                            <strong>StudentBeans
                            <strong className="pull-right">London, United Kingdom</strong></strong>
                        </p>
                        <p className=""><em>Content
                        Creator
                            <p className="pull-right">January 2019 – June 2020</p>
                        </em></p>
                        <ul data-rte-list="default">
                            <li>
                                <p className="">Constructed and implemented content
                                strategies for Instagram, Youtube, Tiktok, and Pinterest</p>
                            </li>
                            <li>
                                <p className=""> Identified emerging social media trends
                                and developments within the fashion and food industries</p>
                            </li>
                            <li>
                                <p className="">Created social media content and worked
                                with brands such as H&amp;M, Dunkin Donuts, ASOS, and more</p>
                            </li>
                            <li>
                                <p className="">Attended and covered live social media
                                story content during PR events and press junkets</p>
                            </li>
                        </ul>
                        <p className=""><strong>Kudos
                            Research <strong className="pull-right">London,
                                United Kingdom</strong></strong></p>
                        <p className=""><em>Market
                        Researcher
                            <p className="pull-right">March 2017 – June 2020</p>
                        </em></p>
                        <ul data-rte-list="default">
                            <li>
                                <p className="">Performed professional market research to
                                identify consumer behavior, industry trends, target markets, and competition
                                within various industries</p>
                            </li>
                            <li>
                                <p className="">Designed and implemented detailed
                                questionnaires and surveys for companies such as DHL and Kone</p>
                            </li>
                            <li>
                                <p className="">Improved customer satisfaction from 81% -
                                98% within two years</p>
                            </li>
                        </ul>
                        <p className=""><span><strong className="underline">LEADERSHIP
                                EXPERIENCE</strong></span></p>
                        <p className=""><strong>Chartered Institute of Marketing
                        (CIM)
                            <strong className="pull-right">London, United Kingdom</strong></strong></p>
                        <p className=""><em>Marketing Programme
                        Representative
                            <p className="pull-right">September 2016 – November 2020</p>
                        </em></p>
                        <ul data-rte-list="default">
                            <li>
                                <p className="">Represented Marketing Programme in termly
                                meetings and worked with Programme Leaders and Dean of School to improve
                                Marketing and Business Departments</p>
                            </li>
                            <li>
                                <p className="">Arranged on-campus events, coordinate
                                guest speakers and managed social media content development</p>
                            </li>
                        </ul>
                        <p className=""><strong>Centre for Student Success &amp; London
                            Design UTC <strong className="pull-right">London,
                                United Kingdom</strong></strong></p>
                        <p className=""><em>Student
                        Mentor
                            <p className="pull-right">January 2017 – July 2019</p>
                        </em></p>
                        <ul data-rte-list="default">
                            <li>
                                <p className="">Collaborated with Houses of Parliament on
                                roundtable discussions for underserved youth in London</p>
                            </li>
                            <li>
                                <p className="">Devised and delivered educational material
                                in the form of activities and presentations for students</p>
                            </li>
                        </ul>
                        <p className=""><span><strong className="underline">SKILLS</strong></span></p>
                        <p className="">Copywriting, Graphic Design, Video
                        Editing/Creation, Adobe Suite, Microsoft Office, Procreate, Canva</p>
                    </div>
                </div>
            </div>

        </div>
        <BottomLinks />
    </div>)
}


export default Resume;