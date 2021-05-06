const courses = [
  {
    id:"COMP228",
        title:"COMP 228  System Hardware ",
        credits:"3",
        content:"Prerequisite: COMP 248; MATH 203 or Cegep Mathematics 103 or NYA previously or concurrently; MATH 204 or Cegep Mathematics 105 or NYC previously or concurrently. Levels of system abstraction and von Neumann model. Basics of digital logic design. Data representation and manipulation. Instruction set architecture. Processor internals. Assembly language programming. Memory subsystem and cache management. I/O subsystem. Introduction to network organization and architecture. Lectures: three hours per week. Tutorial: two hours per week. ",
        notes:"NOTE: Students who have received credit for SOEN 228 may not take this course for credit."
  },
  {
    id:"COMP232",
        title:"COMP 232     Mathematics for Computer Science ",
        credits:"3",
        content:"Prerequisite: MATH 203 or Cegep Mathematics 103 or NYA; MATH 204 or Cegep Mathematics 105 or NYC. Sets. Propositional logic and predicate calculus. Functions and relations. Elements of number theory. Mathematical reasoning. Proof techniques: direct proof, indirect proof, proof by contradiction, proof by induction. Lectures: three hours per week. Tutorial: two hours per week. ",
        notes:"NOTE: Students who have received credit for COMP 238 or COEN 231 may not take this course for credit. "
  },
  {
    id:"COMP233",
        title:"COMP 233     Probability and Statistics for Computer Science",
        credits:"3",
        content:"Prerequisite: MATH 205 or Cegep Mathematics 203 or NYB. Combinatorics. Axioms of probability. Conditional probability. Discrete and continuous probability distributions. Expectation and moments. Hypothesis testing. Parameter estimation. Correlation and linear regression. Applications to computer science. Lectures: three hours per week. Tutorial: two hours per week.",
        notes:"NOTE: Students who have received credit for BIOL 322, ENGR 371, STAT 249, STAT 250, COMM 215, MAST 221, MAST 333 may not take this course for credit."
  },
  {
    id:"COMP248",
        title:"COMP 248     Object-Oriented Programming I ",
        credits:"3.5",
        content:"Prerequisite: MATH 204 or Cegep Mathematics 105 or NYC previously or concurrently. Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods. Information hiding, public vs. private visibility, data abstraction and encapsulation. References. Arrays. Lectures: three hours per week. Tutorial: two hours per week. Laboratory: one hour per week.",
        notes:""
  },
  {
    id:"COMP249",
        title:"COMP 249     Object-Oriented Programming II ",
        credits:"3.5",
        content:"Prerequisite: COMP 248; MATH 203 or Cegep Mathematics 103 or NYA; MATH 205 or Cegep Mathematics 203 or NYB previously or concurrently. Design of classes. Inheritance. Polymorphism. Static and dynamic binding. Abstract classes. Exception handling. File I/O. Recursion. Interfaces and inner classes. Graphical user interfaces. Generics. Collections and iterators. Lectures: three hours per week. Tutorial: two hours per week. Laboratory: one hour per week. ",
        notes:""
  },
  {
    id:"COMP345",
        title:"COMP 345     Advanced Program Design with C++ ",
        credits:"4",
        content:"Prerequisite: COMP 352 previously or concurrently. Introduction to C++. I/O with stream classes. Pointers and their uses. The Standard Template Library (STL): containers, algorithms, iterators, adaptors, function objects. Class design: constructors, destructors, operator overloading, inheritance, virtual functions, exception handling, memory management. Advanced topics: libraries, locales, STL conventions, concurrency, template metaprogramming. Applications of C++: systems, engineering, games programming. Project. Lectures: three hours per week. Laboratory: two hours per week.",
        notes:""
  },
  {
    id:"COMP346",
        title:"COMP 346  Operating Systems",
        credits:"4",
        content:"Prerequisite: COMP 228 or SOEN 228; COMP 352. Fundamentals of operating system functionalities, design and implementation. Multiprogramming: processes and threads, context switching, queuing models and scheduling. Interprocess communication and synchronization. Principles of concurrency. Synchronization primitives. Deadlock detection and recovery, prevention and avoidance schemes. Memory management. Device management. File systems. Protection models and schemes. Lectures: three hours per week. Tutorial: one hour per week. Laboratory: two hours per week.",
        notes:"NOTE: Students who have received credit for COEN 346 may not take this course for credit."
  },
  {
    id:"COMP348",
        title:"COMP 348  Principles of Programming Languages",
        credits:"3",
        content:"Prerequisite: COMP 249. Survey of programming paradigms: Imperative, functional, and logic programming. Issues in the design and implementation of programming languages. Declaration models: binding, visibility, and scope. Type systems, including static and dynamic typing. Parameter passing mechanisms. Hybrid language design. Lectures: three hours per week. Tutorial: one hour per week.",
        notes:""
  },
  {
    id:"COMP352",
        title:"COMP 352 Data Structures and Algorithms",
        credits:"3",
        content:"Prerequisite: COMP 232 previously or concurrently; COMP 249. Abstract data types: stacks and queues, trees, priority queues, dictionaries. Data structures: arrays, linked lists, heaps, hash tables, search trees. Design and analysis of algorithms: asymptotic notation, recursive algorithms, searching and sorting, tree traversal, graph algorithms. Lectures: three hours per week. Tutorial: one hour per week.",
        notes:"NOTE: Students who have received credit for COEN 352 may not take this course for credit."
  },
  {
    id:"COMP353",
        title:"COMP 353 Databases",
        credits:"4",
        content:"Prerequisite: COMP 232 or COEN 231; COMP 352 or COEN 352. Introduction to database management systems. Conceptual database design: the entity-relationship model. The relational data model and relational algebra: functional dependencies and normalization. The SQL language and its application in defining, querying, and updating databases; integrity constraints; triggers. Developing database applications. Other data models: Datalog. Object-oriented data model and ODL. Semi-structured data. Project. Lectures: three hours per week. Tutorial: one hour per week. Laboratory: two hours per week.",
        notes:""
  },
  {
    id:"COMP354",
        title:"COMP 354  Introduction to Software Engineering",
        credits:"4",
        content:"Prerequisite: COMP 352; ENCS 282. Software development process models (e.g. linear vs. iterative). Project management; roles, activities and deliverables for each software life cycle phase. Requirements management: analysis, elicitation, and scope. Architecture, design and the mapping of requirements to design and design to implementation. Traceability. Software quality assurance: verification, validation and the role of testing. Maintenance and evolution. Project. Lectures: three hours per week. Tutorial: one hour per week. Laboratory: two hours per week.",
        notes:"NOTES: 1. Students who have received credit for SOEN 341 may not take this course for credit. 2. Students in the BEng in Software Engineering program may not take this course for credit."
  },
  {
    id:"COMP367",
        title:"COMP 367  Techniques in Symbolic Computation",
        credits:"3",
        content:"Prerequisite: COMP 232 or MAST 217; COMP 248 or MAST 234. Symbolic computation and its use in pure and applied mathematics, in particular in algebra, number theory, cryptography, coding theory, and combinatorics. Programming in a symbolic computing system (e.g. MAPLE).",
        notes:"NOTE: Students who have received credit for MAST 332 may not take this course for credit."
  },
  {
    id:"COMP371",
        title:"COMP 371 Computer Graphics ",
        credits:"4",
        content:"Prerequisite: COMP 232 or COEN 231; COMP 352 or COEN 352. Introduction to computer graphics and graphics hardware. Introduction to graphics API and graphics systems architecture. Mathematics of 2D and 3D transformations, and 2D and 3D viewing. Colour and basic rendering algorithms. Visual realism and visibility. Illumination and shading, global illumination techniques, and textures. Introduction to curves and surfaces, and 3D object modelling. Introduction to computer animation. Project. Lectures: three hours per week. Laboratory: two hours per week.",
        notes:""
  },
  {
    id:"COMP376",
        title:"COMP 376  Introduction to Game Development",
        credits:"4",
        content:"Prerequisite: COMP 371. Introduction to design and implementation aspects of computer gaming: basic game design, storytelling and narratives, and game genres. Virtual environments, 2D and 3D game engines, and game development tools. Character development, gameplay strategies, level design in games, and user interfaces. Architecture of game consoles, analog and digital controllers, and the incorporation of graphics, sound, and music in game implementations. Project. Lectures: three hours per week. Laboratory: two hours per week.",
        notes:""
  },
  {
    id:"COMP432",
        title:"COMP 432  Machine Learning",
        credits:"4",
        content:"Prerequisite: COMP 352. This course introduces conceptual and practical aspects of machine learning. Concepts include regression, classification, maximum likelihood estimation, discriminative vs. generative modelling, generalization, supervised learning, unsupervised learning, semi-supervised learning and transfer learning. Methods include linear models, mixture models, nearest neighbours, support vector machines, random forests, boosting, and basics of deep learning. A project is required. Lectures: three hours per week. Laboratory: two hours per week.",
        notes:""
  },
  {
    id:"COMP472",
        title:"COMP 472  Artificial Intelligence",
        credits:"4",
        content:"Prerequisite: COMP 352 or COEN 352. This course initially describes the scope and history of Artificial Intelligence. Then it covers knowledge representation, heuristic search, game playing and planning. Finally, it introduces the topics of machine learning, genetic algorithms and natural language processing. A project is required. Lectures: three hours per week. Laboratory: two hours per week.",
        notes:""
  },
  {
    id:"SOEN287",
        title:"SOEN 287  Web Programming",
        credits:"3",
        content:"Prerequisite: COMP 248. This course covers the following topics: internet architecture and protocols; web applications through clients and servers; modern HTML and CSS; client-side programming using modern JavaScript and an overview of the advantages of some common modern JavaScript libraries; Regular Expressions; static website contents and dynamic page generation through server-side programming; preserving state (client-side) in web applications; deploying static and dynamic websites and content management systems vs. website deployment. Lectures: three hours per week. Tutorial: two hours per week.",
        notes:""
  },
  {
    id:"SOEN321",
        title:"SOEN 321 Information Systems Security ",
        credits:"3",
        content:"Prerequisite: COMP 346 or COEN 346. This course covers the following topics: introduction to cryptography and cryptanalysis; threats, attacks, and vulnerabilities; security services (confidentiality, authentication, integrity); public key systems including Diffie-Hellman, RSA, Rabin; Digital Signature Schemes; Hash functions and MAC schemes; authentication protocols; network layers and security; protocols; Public Key Infrastructure (PKI); Transport Layer Security (TLS); firewalls; Intrusion Detection Systems; DNS security; Denial of Service Attacks; Penetration testing; Online Privacy and anonymity; Mix networks and Onion Routing; TOR; Malware; Botnets; Spam and Hot topics in Security and Privacy. Lectures: three hours per week. Tutorial: one hour per week.",
        notes:""
  },
  {
    id:"SOEN331",
        title:"SOEN 331  Formal Methods for Software Engineering ",
        credits:"3",
        content:"Prerequisite: COMP 232, 249. This course covers the following topics: property-based (axiomatic and algebraic) formalisms and model-based (abstract and visual) formalisms; axiomatic formalisms with temporal logic, assertions and contracts; algebraic formalisms through algebraic specifications; abstract formalisms through the Z and Object-Z specification languages; visual formalisms through automata (finite state machines and extended finite state machines). Lectures: three hours per week. Tutorial: two hours per week.",
        notes:""
  },

  
]

//get newList
function getNewCoursesList(){
  let list = [];
  for( var i=0; i < courses.length; i++){
    let obj={};
    obj.id=courses[i].id;
    obj.title=courses[i].title;
    obj.credits=courses[i].credits;
    obj.content=courses[i].content;
    obj.notes=courses[i].notes;
    list.push(obj);
  }
  return list;
}

//get Detail of a course
function getCourseDetail(courseID){
  let message={
    code:'404',
    courses:{}
  };
  for(var i =0; i< courses.length; i++){
    if(courseID == courses[i].id){
      message.code='200';
      message.courses = courses[i];
      break;
    }
  }
  return message;

}

module.exports = {
  getCourseDetail:getCourseDetail,
  getNewCoursesList:getNewCoursesList
}
