<template>
    <section class="protfolio">
        <div class="header">
            <h1>Portfolio</h1>
            <hr class="start">
            <b-button variant="dark" size="lg" href="https://drive.google.com/file/d/1j3-xdBtwXnox_wSACiDbUY4uY77lJWYE/view?usp=sharing" target="_blank">Resume</b-button>
        </div>
            <div class="container" v-for="project in projects" :key="project.term">
                <div v-for="fall in project.when" :key="fall.course">
                    <b-row>
                        <h2>{{fall.course}}</h2>
                    </b-row>
                    <div v-if="fall.one">
                        <p>{{fall.text}}</p>
                        <div style="text-align: center;">
                        <b-link href="https://github.com/lescobar723/website-v2" target="_blank">
                            <b-icon icon="github" style="color: black;" font-scale="4"></b-icon>
                        </b-link>
                        </div>
                    </div>
                    <b-row>
                        <b-col xs="12" md="6" lg="4" v-for="proj in fall.projs" :key="proj.name">
                            <div class="card">
                                <div class="card-head">
                                    <img alt=""
                                        class="img-custome"
                                        :src="proj.url"
                                    >
                                    <h3>{{ proj.name }}</h3>
                                    <div id="github-1">
                                    <b-link v-if="proj.name == 'Study Buddy'" href="https://github.com/lescobar723/study-buddy" target="_blank">
                                        <b-icon icon="github" style="color: black;" font-scale="2"></b-icon>
                                    </b-link>
                                    </div>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>{{ proj.language }}</p>
                                    <button @click="openModal(proj.name, proj.message, proj.url2, proj.date, proj.mif)" class="btn btn-outline-secondary">
                                        More
                                    </button>
                                </div>
                            </div>
                            <br>
                        </b-col>
                    </b-row>
                </div>
            </div>

            <b-modal ref="my-modal" id="modal-1" :title="modalTitle" ok-only>
                <b-embed v-if="modalif"
                    type="iframe"
                    aspect="16by9"
                    :src="modalURL"
                    allowfullscreen
                    style="padding-bottom: 20px;"
                ></b-embed>
                <ul id="bullets">
                    <li v-for="message in modalMessages" :key="message.p">{{message.p}}</li>
                </ul>
            </b-modal>
        </section>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'Portfolio',
    data() {
      return {
        modalif: false,
        modalDate: '',
        modalTitle: '',
        modalMessages: [],
        modalURL: '',
        projects: [
            { term: 'personal', when: [
                {course: 'lesleyescobar.com (This Website!)', one:true, text: 'Constructed a personalized website to showcase my skills and experience as a Computer Science major. This website was designed with Vue.js, HTML, CSS, and Bootstrap.' }
            ]},
            { term: 'Fall2020', when: [
                { course: 'EECS 493: User Interface Development', projs: [ 
                    { name: 'Study Buddy', date: 'November-December 2020',url: require('../assets/projects/logo2.png'), language: 'Vue.js, Bootstrap', url2: require('../assets/modal/studyBuddy.mp4'),
                        mif: true,
                        message: [
                            {p: '​Collaborated in a team of 4 to design a web application to motivate students to study'},
                            {p: 'Developed with HTML, CSS (Bootstrap), Vue.js, and Firebase'}
                        ]
                    },
                    { name: 'Mardi Gras Parade', date: 'October 2020',url: require('../assets/projects/mardi-gras.jpg'), language: 'HTML, CSS, JQuery', url2: require('../assets/modal/mardigrasparade.mp4'), 
                        mif: true,
                    }
                ]},

                { course: 'EECS 485: Web Systems', projs: [
                    { name: 'Instagram Clone', date: 'September-October 2020', url: require('../assets/projects/screenshot-index-small.png'), language: 'React.js, Python, SQLite', url2: require('../assets/modal/insta485.mp4'), 
                        mif: true,
                        message: [
                            {p: 'Constructed an Instagram clone in a team of 3, which included a static site, a server-side dynamic side, and a client-side dynamic side'},
                            {p: 'Accomplished with HTML, CSS, Python (Flask), Jinja2, JavaScript (React), JSON, and SQLite'}
                        ]
                    },
                    { name: 'MapReduce', date: 'November 2020', url: require('../assets/projects/map-reduce.jpg'), language: 'Python',
                        mif: false,
                        message: [
                            {p: 'Implemented a simple Map Reduce Python package in a team of 3 to handle tasks'},
                            {p: 'Utilized TCP/UDP sockets, Threads, Processes, classes, Python, and JSON'}
                        ]
                    },
                    { name: 'Wikipedia Search Engine', date: 'December 2020', url: require('../assets/projects/wiki.png'), language: 'Hadoop, Python', 
                        mif: false,
                        message: [
                            {p: 'Collaborated in a team of 3 to build a scalable search engine that is similar to a commercial search engine'},
                            {p: 'Achieved through indexing implemented with MapReduce, information retrieval based on both tf-idf and PageRank scores, and information retrieval based on both tf-idf and PageRank scores'},
                            {p: 'Developed with Hadoop pipeline script, Python, Flask, JSON, and HTML'}
                        ]
                    }
                ]},
            ] },
            { term: 'Winter2020', when: [
                { course: 'EECS 281: Introduction to Computer Data Structures and Algorithms', projs: [ 
                    { name: 'Puzzle Solver', url: require('../assets/projects/281-1.jpg'), language: 'C++',
                        mif: false,
                        message: [
                            {p: 'Created a program to solve a maze by either using a stack or queue as determined by the command-line'},
                            {p: 'Uses BFS or DFS algorithm as determined by the command-line'}
                        ]
                    },
                    { name: 'Stock Market Emulation', url: require('../assets/projects/proj-2.jpg'), language: 'C++', 
                        mif: false,
                        message: [
                            {p: 'Implemented priority queues to determine the best outcome in a stock market simulation'}
                        ]
                    },
                    { name: 'SillyQL', url: require('../assets/projects/proj-3.jpg'), language: 'C++', 
                        mif: false,
                        message: [
                            {p: 'Utilized hash tables and binary search trees that can create, insert into, delete from, generate a hash or bst index, join, and remove tables, making a simple SQL'}
                        ]
                    },
                    { name: 'Drone Delivery', url: require('../assets/projects/proj-4.jpg'), language: 'C++', 
                        mif: false,
                        message: [
                            {p: "Implemented Prim's Algorithm, Branch and Bound Algorithm, and TSP heuristics to optimally and efficiently deliver a drone from one location"}
                        ]
                    }
                ]},

                { course: 'EECS 370: Introduction to Computer Organization', projs: [
                    { name: 'LC-2K Assembly Language', url: require('../assets/projects/370-1.jpg'), language: 'C', 
                        mif: false,
                        message: [
                            {p: 'Wrote a program to take an assembly-language program and produce the corresponding machine language, which will construct a behavioral simulator'}
                        ]
                    },
                    { name: 'LC2K File Linker', url: require('../assets/projects/370-2.jpg'), language: 'C', 
                        mif: false,
                        message: [
                            {p: 'Constructed a program that assembles an assembly file into an object file. Then, link object files into one executable consisting of machine code'}
                        ]
                    },
                    { name: 'LC-2K Pipeline', url: require('../assets/projects/370-3.jpg'), language: 'C', 
                        mif: false,
                        message: [
                            {p: 'Desgined a pipeline implementation program that inputs an assembly language and outputs the pipeline using simplified data forwarding'}
                        ]
                    },
                    { name: 'Cache Simulator', url: require('../assets/projects/370-4.jpg'), language: 'C', 
                        mif: false,
                        message: [
                            {p: 'Simulate a CPU cache and integrate into a behavioral simulator by accessing instructions and data while executing an assembly-language program'}
                        ]
                    }
                ]},
            ] } ,
            { term: 'Fall2019', when: [
                { course: 'EECS 280: Programming and Introductory Data Structures', projs: [ 
                    { name: 'Statistics', url: require('../assets/projects/280-1.jpg'), language: 'C++',
                        mif: false,
                        message: [
                            {p: 'Implemented a program using vectors and file I/O to read in numerical data and provide a statistical summary'}
                        ]
                    },
                    { name: 'Computer Vision', url: require('../assets/projects/280-2.jpg'), language: 'C++',
                        mif: false,
                        message: [
                            {p: 'Implemented a program using matrices to save a resized or distorted version of a given image as a new file'}
                        ]
                    },
                    { name: 'Euchre', url: require('../assets/projects/280-3.jpg'), language: 'C++',
                        mif: false,
                        message: [
                            {p: 'A C++ version of the card game, Euchre which uses polymorphism to handle the hands of multiple players and the points they have accumulated'}
                        ]
                    },
                    { name: 'Machine Learning', url: require('../assets/projects/280-4.jpg'), language: 'C++',
                        mif: false,
                        message: [
                            {p: 'A program classify piazza posts into different categories by implementing binary search trees and maps'}
                        ]
                    }
                ]},
            ] },
            { term: 'Winter2019', when: [
                { course: 'EECS 183: Programming and Introductory Data Structures', projs: [ 
                    { name: 'Ciphers', url: require('../assets/projects/183-1.jpg'), language: 'C++',
                        mif: false,
                        message: [
                            {p: 'A program using nested loops to decrypt or encrypt a given cipher method and key.'},
                        ]
                    },
                    { name: 'Sandwich Stacker', date: 'December 2018',url: require('../assets/projects/183-2.jpg'), language: 'Arduino', url2: require('../assets/modal/FullSizeRender.mp4'), 
                        mif: true,
                        message: [ 
                            {p: 'Created a game using classes to make a sandwich with the key indigridients displayed on the side.'},
                            {p: 'Collaborated in a team of 4'},
                            {p: 'Exceeded in learning the Arduino programming language in a short amount of time to successfully code a game' }]
                    }
                ]},
            ]}
        ]
        }
    },
    methods: {
        openModal(name, message, url, date, mif){
            this.modalTitle = name;
            this.modalDate = date;
            this.modalif = mif;
            this.modalMessages = message;
            this.modalURL = url;
            this.$refs['my-modal'].show(); 
        }
    }
}
</script>

<style scoped>
.header{
    text-align: center;
    margin-bottom: 30px;
}
.card{
    text-align: center;
}
.start{
    width: 200px;
    background-color: #f07269;
    height: 2px;
}
h1{
    font-weight: bold;
    text-align: center;
    color: #f07269;
}
h2{
    padding-bottom: 10px;
}
h3{
    font-size: 23px;
    padding-top: 15px;
}
.protfolio{
    background-color: #34345238;
    padding-top: 100px;
    padding-bottom: 7%;
}
.img-custome{
    height: 170px;
    margin-top: 15px;
}
.card-body{
    padding-top: 1px;
}
</style>