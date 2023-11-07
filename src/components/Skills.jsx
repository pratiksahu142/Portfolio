import React from "react";
import activemq from "../assets/skills/activemq.png";
import ajax from "../assets/skills/ajax.png";
import ansible from "../assets/skills/ansible.png";
import aws from "../assets/skills/aws.png";
import azure from "../assets/skills/azure.png";
import chef from "../assets/skills/chef.png";
import cron from "../assets/skills/cron.png";
import django from "../assets/skills/django.png";
import docker from "../assets/skills/docker.png";
import firebase from "../assets/skills/firebase.png";
import html_img from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import github from "../assets/skills/github.png";
import gitlab from "../assets/skills/gitlab.png";
import groovy from "../assets/skills/groovy.png";
import hibernate from "../assets/skills/hibernate.png";
import html from "../assets/skills/html.png";
import java from "../assets/skills/java.png";
import javascript from "../assets/skills/javascript.png";
import jenkins from "../assets/skills/jenkins.png";
import jira from "../assets/skills/jira.png";
import json from "../assets/skills/json.png";
import kafka from "../assets/skills/kafka.png";
import kubernetes from "../assets/skills/kubernetes.png";
import mongodb from "../assets/skills/mongodb.jpg";
import mesosphere from "../assets/skills/mesosphere.png";
import mysql from "../assets/skills/mysql.png";
import typescript from "../assets/skills/typeScript.png";
import node from "../assets/skills/node.png";
import openshift from "../assets/skills/openshift.png";
import oracle from "../assets/skills/oracle.png";
import python from "../assets/skills/python.png";
import rally from "../assets/skills/rally.png";
import react from "../assets/skills/react.png";
import rest from "../assets/skills/rest.png";
import soap from "../assets/skills/soap.png";
import springintegration from "../assets/skills/springintegration.png";
import spring from "../assets/skills/springjava.png";
import springboot from "../assets/skills/springboot.png";
import teamcity from "../assets/skills/teamcity.png";
import tomcat from "../assets/skills/tomcat.png";
import urbancode from "../assets/skills/urbancode.png";
import xml from "../assets/skills/xml.png";


function Skills() {
    const skillset = [
        {
            id: 1,
            category: "Programming Languages",
            skills: [
                        {
                            id: 1,
                            src: java,
                            title: "Java",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 2,
                            src: python,
                            title: "Python",
                            style: "shadow-green-400",
                        },
                        {
                            id: 3,
                            src: groovy,
                            title: "Groovy",
                            style: "shadow-blue-400",
                        },
                        {
                            id: 4,
                            src: mysql,
                            title: "SQL",
                            style: "shadow-yellow-400",
                        },
                        {
                            id: 5,
                            src: xml,
                            title: "XML",
                            style: "shadow-red-400",
                        },
                        {
                            id: 6,
                            src: json,
                            title: "JSON",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 7,
                            src: javascript,
                            title: "JavaScript",
                            style: "shadow-green-400",
                        }
            ]
        },
        {
            id: 2,
            category: "Frameworks",
            skills: [
                        {
                            id: 1,
                            src: springboot,
                            title: "Springboot",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 2,
                            src: springintegration,
                            title: "Spring Integration",
                            style: "shadow-green-400",
                        },
                        {
                            id: 3,
                            src: django,
                            title: "Django",
                            style: "shadow-blue-400",
                        },
                        {
                            id: 4,
                            src: react,
                            title: "ReactJS",
                            style: "shadow-yellow-400",
                        }
            ]
        },
        {
            id: 3,
            category: "Web Technologies",
            skills: [
                        {
                            id: 1,
                            src: html_img,
                            title: "HTML",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 2,
                            src: css,
                            title: "CSS",
                            style: "shadow-green-400",
                        },
                        {
                            id: 3,
                            src: rest,
                            title: "REST API",
                            style: "shadow-blue-400",
                        },
                        {
                            id: 4,
                            src: soap,
                            title: "SOAP",
                            style: "shadow-yellow-400",
                        },
                        {
                            id: 5,
                            src: javascript,
                            title: "JavaScript",
                            style: "shadow-red-400",
                        },
                        {
                            id: 6,
                            src: ajax,
                            title: "AJAX",
                            style: "shadow-gray-400",
                        }
            ]
        },
        {
            id: 4,
            category: "Middleware",
            skills: [
                        {
                            id: 1,
                            src: activemq,
                            title: "ActiveMQ",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 2,
                            src: kafka,
                            title: "Kafka",
                            style: "shadow-green-400",
                        },
                        {
                            id: 3,
                            src: cron,
                            title: "Cron Jobs",
                            style: "shadow-blue-400",
                        },
                        {
                            id: 4,
                            src: tomcat,
                            title: "Apache Tomcat",
                            style: "shadow-yellow-400",
                        },
                        {
                            id: 5,
                            src: github,
                            title: "Github",
                            style: "shadow-red-400",
                        },
                        {
                            id: 5,
                            src: gitlab,
                            title: "Gitlab",
                            style: "shadow-gray-400",
                        }
            ]
        },
        {
            id: 5,
            category: "Cloud Technologies",
            skills: [
                        {
                            id: 1,
                            src: docker,
                            title: "Docker",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 2,
                            src: kubernetes,
                            title: "Kubernetes",
                            style: "shadow-green-400",
                        },
                        {
                            id: 3,
                            src: openshift,
                            title: "Openshift",
                            style: "shadow-blue-400",
                        },
                        {
                            id: 4,
                            src: aws,
                            title: "AWS",
                            style: "shadow-yellow-400",
                        },
                        {
                            id: 5,
                            src: azure,
                            title: "Azure",
                            style: "shadow-red-400",
                        },
                        {
                            id: 6,
                            src: mesosphere,
                            title: "Mesosphere",
                            style: "shadow-gray-400",
                        }
            ]
        },
        {
            id: 6,
            category: "Databases",
            skills: [
                        {
                            id: 1,
                            src: oracle,
                            title: "Oracle DB",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 2,
                            src: mysql,
                            title: "MySQL",
                            style: "shadow-green-400",
                        },
                        {
                            id: 3,
                            src: mongodb,
                            title: "MongoDB",
                            style: "shadow-blue-400",
                        },
                        {
                            id: 4,
                            src: hibernate,
                            title: "Hibernate",
                            style: "shadow-yellow-400",
                        },
                        {
                            id: 5,
                            src: firebase,
                            title: "Firebase",
                            style: "shadow-red-400",
                        }
            ]
        },
        {
            id: 7,
            category: "CICD Tools",
            skills: [
                        {
                            id: 1,
                            src: jenkins,
                            title: "Jenkins",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 2,
                            src: teamcity,
                            title: "Teamcity",
                            style: "shadow-green-400",
                        },
                        {
                            id: 3,
                            src: chef,
                            title: "Chef",
                            style: "shadow-blue-400",
                        },
                        {
                            id: 4,
                            src: ansible,
                            title: "Ansible",
                            style: "shadow-yellow-400",
                        },
                        {
                            id: 5,
                            src: urbancode,
                            title: "UrbanCode",
                            style: "shadow-red-400",
                        }
            ]
        },
        {
            id: 7,
            category: "CICD Tools",
            skills: [
                        {
                            id: 1,
                            src: rally,
                            title: "Rally",
                            style: "shadow-gray-400",
                        },
                        {
                            id: 2,
                            src: jira,
                            title: "Jira",
                            style: "shadow-green-400",
                        }
            ]
        }
    ]

    return (
        <div
            name="skills"
            className="bg-gradient-to-b from-gray-900 to-gray-400 w-max-content mx-auto h-max-content"
        >
            <div
                className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className='pb-6'>
                    <p className="text-4xl font-bold border-b-4 border-orange-500 inline">
                        Skills
                    </p>
                </div>

                {skillset.map(({id,category,skills}) => (
                    <div key={id}>
                    <h1 className='font-bold'>{category}</h1>
                                    <div
                                        className="w-full grid grid-cols-4 sm:grid-cols-8 gap-8 text-center py-8 px-12 sm:px-0">
                                        {skills.map(({id, src, title, style}) => (
                                            <div
                                                key={id}
                                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                                            >
                                                <img src={src} alt="" className="w-20 mx-auto"/>
                                                <p className="mt-4">{title}</p>
                                            </div>
                                        ))}
                                    </div>
                    </div>)
                )}
            </div>
        </div>
    );
}
export default Skills;
