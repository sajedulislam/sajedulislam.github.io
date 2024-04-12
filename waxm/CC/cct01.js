
  var questions = [
    {
      question: "Which access control is more effective at protecting a door against unauthorized access?",
      options: ["", "A. Fences", "B. Turnstiles", "C. Barriers", "D. Locks"],
      correctAnswer: "D"
    },
    {
      question: "Which type of attack PRIMARILY aims to make a resource inaccessible to its intended users?",
      options: ["", "A. Phishing", "B. Denial of Service", "C. Trojans", "D. Cross-Site Scripting"],
      correctAnswer: "B"
    },
    {
      question: "Which devices have the PRIMARY objective of collecting and analyzing security events?",
      options: ["", "A. Firewalls", "B. Hubs", "C. Routers", "D. SIEM"],
      correctAnswer: "D"
    },
    {
      question: "Which access control model specifies access to an object based on the subject's role in the organization?",
      options: ["", "A. RBAC", "B. MAC", "C. ABAC", "D. DAC"],
      correctAnswer: "A"
    },
    {
      question: "When a company hires an insurance company to mitigate risk, which risk management technique is being applied?",
      options: ["", "A. Risk transfer", "B. Risk avoidance", "C. Risk mitigation", "D. Risk tolerance"],
      correctAnswer: "A"
    },
    {
      question: "Which type of attack will most effectively provide privileged access (root access in Unix/Linux platforms) to a computer while hiding its presence?",
      options: ["", "A. Rootkits", "B. Phishing", "C. Cross-Site Scripting", "D. Trojans"],
      correctAnswer: "A"
    },
    {
      question: "Which device is used to connect a LAN to the Internet?",
      options: ["", "A. Router", "B. Firewall", "C. HIDS", "D. SIEM"],
      correctAnswer: "A"
    },
    {
      question: "How many data labels are considered manageable?",
      options: ["", "A. 1-2", "B. 1", "C. 2-3", "D. 4"],
      correctAnswer: "C"
    },
    {
      question: "In Change Management, which component addresses the procedures needed to undo changes?",
      options: ["", "A. Request for Approval", "B. Rollback", "C. Request for Change", "D. Disaster and Recover"],
      correctAnswer: "B"
    },
    {
      question: "Which of the following is an example of 2FA?",
      options: ["", "A. One-Time passwords (OTA)", "B. Keys", "C. Badges", "D. Passwords"],
      correctAnswer: "A"
    },
    {
      question: "Which cloud deployment model is suited to companies with similar needs and concerns?",
      options: ["", "A. Community cloud", "B. Private cloud", "C. Multi-tenant", "D. Hybrid cloud"],
      correctAnswer: "A"
    },
    {
      question: "Which of these would be the best option if a network administrator needs to control access to a network?",
      options: ["", "A. HIDS", "B. IDS", "C. SIEM", "D. NAC"],
      correctAnswer: "D"
    },
	{
    "question": "In order to find out whether personal tablet devices are allowed in the office, which of the following policies would be helpful to read?",
    "options": ["", "A. Change Management Policy", "B. BYOD", "C. Privacy Policy", "D. AUP"],
    "correctAnswer": "B"
  },
  {
    "question": "Governments can impose financial penalties as a consequence of breaking a",
    "options": ["", "A. Regulation", "B. Procedure", "C. Standard", "D. Policy"],
    "correctAnswer": "A"
  },
  {
    "question": "In incident terminology, the meaning of Zero Day is:",
    "options": ["", "A. Days to solve a previously unknown system vulnerability", "B. Days without a cybersecurity incident", "C. Days with a cybersecurity incident", "D. A previously unknown system vulnerability"],
    "correctAnswer": "D"
  },
  {
    "question": "What is an effective way of hardening a system?",
    "options": ["", "A. Patch the system", "B. Create a DMZ for web application services", "C. Have an IDS in place", "D. Run a vulnerability scan"],
    "correctAnswer": "A"
  },
  {
    "question": "The address 8be2:4382:8d84:7ce2:ec0f:3908:d29a:903a is an",
    "options": ["", "A. Web address", "B. IPv6 address", "C. Mac address", "D. IPv4 address"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of these types of user is LESS likely to have a privileged account?",
    "options": ["", "A. System Administrator", "B. Security Analyst", "C. External Worker", "D. Help Desk"],
    "correctAnswer": "C"
  },
  {
    "question": "A device found not to comply with the security baseline should be",
    "options": ["", "A. Disabled or isolated into a quarantine area until it can be checked and updated", "B. Marked as potentially vulnerable and placed in a quarantine area", "C. Disabled or separated into a quarantine an until a virus scan", "D. Placed in a demilitarized zone (DMZ) until it can be reviewed and updated"],
    "correctAnswer": "A"
  },
  {
    "question": "Which type of attack attempts to gain information by observing the device's power consumption?",
    "options": ["", "A. Side Channels", "B. Trojans", "C. Cross Site Scripting", "D. Denial of Service"],
    "correctAnswer": "A"
  },
  {
    "question": "Which of these is not an attack against an IP network?",
    "options": ["", "A. Man-in-the-middle Attack", "B. Oversized Packet Attack", "C. Side-channel Attack", "D. Fragmented Packet Attack"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of the following attacks take advantage of poor input validation in websites?",
    "options": ["", "A. Cross-Site Scripting", "B. Rootkits", "C. Phishing", "D. Trojans"],
    "correctAnswer": "A"
  },
  {
    "question": "An entity that acts to exploit a target organization's system vulnerabilities is a:",
    "options": ["", "A. Threat Actor", "B. Threat Vector", "C. Attacker", "D. Threat"],
    "correctAnswer": "A"
  },
  {
    "question": "The last phase in the data security cycle is:",
    "options": ["", "A. Destruction", "B. Backup", "C. Archival", "D. Encryption"],
    "correctAnswer": "A"
  },
  {
    "question": "Which of the following types of devices inspect packet header information to either allow or deny network traffic?",
    "options": ["", "A. Firewalls", "B. Hubs", "C. Routers", "D. Switches"],
    "correctAnswer": "A"
  },
  {
    "question": "Which of the following principles aims primarily at fraud detection?",
    "options": ["", "A. Least Privilege", "B. Privileged Accounts", "C. Separation of Duties", "D. Defense in Depth"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of the following is a detection control?",
    "options": ["", "A. Smoke sensors", "B. Bollards", "C. Firewalls", "D. Turnstiles"],
    "correctAnswer": "A"
  },
  {
    "question": "Which port is used to secure communication over the web (HTTPS)?",
    "options": ["", "A. 69", "B. 25", "C. 80", "D. 443"],
    "correctAnswer": "D"
  },
  {
    "question": "Which protocol uses a three-way handshake to establish a reliable connection?",
    "options": ["", "A. UDP", "B. SNMP", "C. TCP", "D. SMTP"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of the following is an example of an administrative security control?",
    "options": ["", "A. No entry signs", "B. Access Control Lists", "C. Acceptable Use Policies", "D. Badge Readers"],
    "correctAnswer": "C"
  },
  {
    "question": "A best practice of patch management is to:",
    "options": ["", "A. Apply patches according to the vendor's reputation", "B. Apply all patches as quickly as possible", "C. Apply patches every Wednesday", "D. Test patches before applying them"],
    "correctAnswer": "D"
  },
  {
    "question": "Which security principle states that a user should only have the necessary permission to execute a task?",
    "options": ["", "A. Separation of Duties", "B. Least Privilege", "C. Privileged Accounts", "D. Defense in Depth"],
    "correctAnswer": "B"
  },
  {
    "question": "Which concept describes an information security strategy that integrates people, technology and operations in order to establish security controls across multiple layers of the organization?",
    "options": ["", "A. Defense in Depth", "B. Least Privilege", "C. Separation of Duties", "D. Privileged Accounts"],
    "correctAnswer": "A"
  },
  {
    "question": "Which of the following cloud models allows access to fundamental computer resources?",
    "options": ["", "A. PaaS", "B. IaaS", "C. FaaS", "D. SaaS"],
    "correctAnswer": "B"
  },
  {
    "question": "In which cloud model does the cloud customer have LESS responsibility over the infrastructure?",
    "options": ["", "A. SaaS", "B. FaaS", "C. IaaS", "D. PaaS"],
    "correctAnswer": "A"
  },
  {
    "question": "What is the consequence of a Denial of Service attack?",
    "options": ["", "A. Remote control of a device", "B. Exhaustion of device resources", "C. Malware Infection", "D. Increase in the availability of resources"],
    "correctAnswer": "B"
  },
  {
    "question": "In which of the following access control models can the creator of an object delegate permission?",
    "options": ["", "A. RBAC", "B. MAC", "C. DAC", "D. ABAC"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of the following is NOT a possible model for an Incident Response Team (IRT)?",
    "options": ["", "A. Dedicated", "B. Hybrid", "C. Pre-existing", "D. Leveraged"],
    "correctAnswer": "C"
  },
  {
    "question": "Which are the components of an incident response plan?",
    "options": ["", "A. Preparation - Detection and Analysis Containment Eradication - Post-Incident Activity -- Recovery", "B. Preparation Detection and Analysis Containment, Eradication and Recovery Post-Incident Activity", "C. Preparation - Detection and Analysis Recovery Containment Eradication Post-Incident - Activity", "D. Preparation - Detection and Analysis - Eradication Recovery Containment - Post-Incident - Activity"],
    "correctAnswer": "B"
  },
  {
    "question": "With respect to risk management, which of the following options should be prioritized?",
    "options": ["", "A. The expected probability of occurrence is high, and the potential impact is low", "B. The frequency of occurrence is low, and the expected impact value is high", "C. The expected probability of occurrence is low, and the potential impact is low", "D. The frequency of occurrence is high, and the expected impact value is low"],
    "correctAnswer": "B"
  },
  {
    "question": "Which access control model can grant access to a given object based on complex rules?",
    "options": ["", "A. RBAC", "B. DAC", "C. ABAC", "D. MAC"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of these has the PRIMARY objective of identifying and prioritizing critical business processes?",
    "options": ["", "A. Disaster Recovery Plan", "B. Business Impact Analysis", "C. Business Impact Plan", "D. Business Continuity Plan"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of the following are NOT types of security controls?",
    "options": ["", "A. System-specific controls", "B. Common controls", "C. Hybrid controls", "D. Storage controls"],
    "correctAnswer": "D"
  },
  {
    "question": "Which of the following is NOT an ethical canon of the (ISC)²?",
    "options": ["", "A. Provide active and qualified service to principal", "B. Act honorably, honestly, justly, responsibly and legally", "C. Advance and protect the profession", "D. Protect society, the common good, necessary public trust and confidence, and the infrastructure"],
    "correctAnswer": "A"
  },
  {
    "question": "Which type of attack embeds malicious payload inside a reputable or trusted software?",
    "options": ["", "A. Rootkits", "B. Cross-Site Scripting", "C. Phishing", "D. Trojans"],
    "correctAnswer": "D"
  },
  {
    "question": "Which type of attack attempts to trick the user into revealing personal information by sending a fraudulent message?",
    "options": ["", "A. Denials of Service", "B. Trojans", "C. Cross-Site Scripting", "D. Phishing"],
    "correctAnswer": "D"
  },
  {
    "question": "Which of the following is NOT a protocol of the OSI Level 3?",
    "options": ["", "A. ICMP", "B. IP", "C. SNMP", "D. IGMP"],
    "correctAnswer": "C"
  },
  {
    "question": "Which are the three packets used on the TCP connection handshake?",
    "options": ["", "A. SYN-ACK-FIN", "B. Offer Request-ACK", "C. SYN-SYN/ACK-ACK", "D. Discover Offer Request"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of the following is NOT a type of learning activity used in Security Awareness?",
    "options": ["", "A. Tutorial", "B. Awareness", "C. Education", "D. Training"],
    "correctAnswer": "A"  
  },
  {
    "question": "Which regulations address data protection and privacy in Europe?",
    "options": ["", "A. FISMA", "B. HIPAA", "C. SOX", "D. GDPR"],
    "correctAnswer": "D"
  },
  {
    "question": "Malicious emails that aim to attack company executives are an example of:",
    "options": ["", "A. Phishing", "B. Trojans", "C. Whaling", "D. Rootkits"],
    "correctAnswer": "C"
  },
  {
    "question": "Sensitivity is a measure of the",
    "options": ["", "A. pertinence assigned to information by its owner, or the purpose of representing its need for urgency", "B. protection and timeliness assigned to information by its owner, or the purpose of representing its need for urgency", "C. importance assigned to information by its owner, or the purpose of representing its need for protection", "D. urgency and protection assigned to information by its owner"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of the following is NOT an example of a physical security control?",
    "options": ["", "A. Security cameras", "B. Biometric access controls", "C. Remote control electronic locks", "D. Firewalls"],
    "correctAnswer": "D"
  },
  {
    "question": "Risk Management is:",
    "options": ["", "A. The assessment of the potential impact of a threat", "B. The identification, evaluation and prioritization of risks", "C. The impact and likelihood of a threat", "D. The creation of an incident response team"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of these tools is commonly used to crack passwords?",
    "options": ["", "A. John the Ripper", "B. Nalookup", "C. Burp Suite", "D. Wireshark"],
    "correctAnswer": "A"
  },
  {
    "question": "What type of security control is the biometric reader that grants access to the data center building?",
    "options": ["", "A. Administrative Control", "B. Physical Control", "C. Technical Control", "D. Authorization Control"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of the following areas is connected to PII (Personally Identifiable Information)?",
    "options": ["", "A. Non-repudiation", "B. Authentication", "C. Integrity", "D. Confidentiality"],
    "correctAnswer": "D"
  },
  {
    "question": "An exploitable weakness or flaw in a system or component is ac",
    "options": ["", "A. Vulnerability", "B. Bug", "C. Threat", "D. Risk"],
    "correctAnswer": "A"
  },
  {
    "question": "In which of the following phases of an Incident Recovery Plan are incident responses prioritized?",
    "options": ["", "A. Post-incident Activity", "B. Detection and Analysis", "C. Contentment, Eradication, and Recovery", "D. Preparation"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of the following properties is NOT guaranteed by Digital Signatures?",
    "options": ["", "A. Authentication", "B. Non-repudiation", "C. Confidentiality", "D. Integrity"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of these is NOT a change management component?",
    "options": ["", "A. RFC", "B. Governance", "C. Approval", "D. Rollback"],
    "correctAnswer": "B"
  },
  {
    "question": "In the event of a disaster, what should be the primary objective?",
    "options": ["", "A. Protection of the production database", "B. Guarantee the safety of people", "C. Application of disaster communication", "D. Guarantee the continuity of critical systems"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of the following canons is found in the (ISC)² code of ethics?",
    "options": ["", "A. Act honorably, honestly, safely and legally", "B. Provide diligent and competent service to principals", "C. Advance and promote the profession", "D. Protect society, the common good, and the infrastructure"],
    "correctAnswer": "B"
  },
  {
    "question": "The magnitude of the harm expected as a result of the consequences of an unauthorized disclosure, modification, destruction, or loss of information, is known as the",
    "options": ["", "A. Vulnerability", "B. Likelihood", "C. Threat", "D. Impact"],
    "correctAnswer": "D"
  },
  {
    "question": "Which of the following is NOT a social engineering technique?",
    "options": ["", "A. Pretexting", "B. Segregation", "C. Quid pro quo", "D. Baiting"],
    "correctAnswer": "B"
  },
  {
    "question": "A web server that accepts requests from external clients should be placed in which network?",
    "options": ["", "A. Intranet", "B. Internal Network", "C. VPN", "D. DMZ"],
    "correctAnswer": "D"
  },
  {
    "question": "The SMTP protocol operates at OSI Level:",
    "options": ["", "A. 25", "B. 23", "C. 3", "D. 7"],
    "correctAnswer": "D"
  },
  {
    "question": "The process that ensures that system changes do not adversely impact business operations is known as:",
    "options": ["", "A. Change Management", "B. Inventory Management", "C. Vulnerability Management", "D. Configuration Management"],
    "correctAnswer": "A"
  },
  {
    "question": "Which of the following is a data handling policy procedure?",
    "options": ["", "A. Collect", "B. Destroy", "C. Encade", "D. Transform"],
    "correctAnswer": "B"
  },
  {
    "question": "The cloud deployment model where a company has resources on-premise and in the cloud is known as:",
    "options": ["", "A. Private cloud", "B. Hybrid cloud", "C. Multi-tenant", "D. Community cloud"],
    "correctAnswer": "B"
  },
  {
    "question": "A security safeguard is the same as a",
    "options": ["", "A. Security control", "B. Security principle", "C. Safety control", "D. Privacy control"],
    "correctAnswer": "A"
  },
  {
    "question": "How many layers does the OSI model have?",
    "options": ["", "A.4", "B.6", "C.8", "D.7"],
    "correctAnswer": "D"
  },
  {
    "question": "The process of verifying or proving the user's identification is known as:",
    "options": ["", "A. Integrity", "B. Authentication", "C. Confidentiality", "D. Authorization"],
    "correctAnswer": "B"
  },
  {
    "question": "If there is no time constraint, which protocol should be employed to establish a reliable connection between two devices?",
    "options": ["", "A. TCP", "B. SNMP", "C. UDP", "D. DHCP"],
    "correctAnswer": "A"
  },
  {
    "question": "Which tool is commonly used to sniff network traffic?",
    "options": ["", "A. Wireshark", "B. Burp Suite", "C. John the Ripper", "D. Nslookup"],
    "correctAnswer": "A"
  },
  {
    "question": "What does SIEM mean?",
    "options": ["", "A. System Information and Enterprise Manager", "B. System Information and Event Manager", "C. Security Information and Enterprise Manager", "D. Security Information and Event Manager"],
    "correctAnswer": "D"
  },
  {
    "question": "Which of the following is NOT a feature of a cryptographic hash function?",
    "options": ["", "A. Reversible", "B. Deterministic", "C. Unique", "D. Useful"],
    "correctAnswer": "A"
  },
  {
    "question": "The Bell and LaPadula access control model is a form of: (*)",
    "options": ["", "A. ABAC", "B. MAC", "C. DAC", "D. RBAC"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of the following is an example of a technical security control?",
    "options": ["", "A. Access control lists", "B. Fences", "C. Bollards", "D. Turnstiles"],
    "correctAnswer": "A"
  },
  {
    "question": "Which type of attack has the PRIMARY objective of encrypting devices and their data, and then demanding a ransom payment for the decryption key?",
    "options": ["", "A. Ransomware", "B. Cross-Site Scripting", "C. Trojan", "D. Phishing"],
    "correctAnswer": "A"
  },
  {
    "question": "Which of the following documents contains elements that are NOT mandatory?",
    "options": ["", "A. Procedures", "B. Guidelines", "C. Policies", "D. Regulations"],
    "correctAnswer": "B"
  },
  {
    "question": "Which physical access control would be MOST effective against tailgating?",
    "options": ["", "A. Fences", "B. Locks", "C. Barriers", "D. Turnstiles"],
    "correctAnswer": "D"
  },
  {
    "question": "The detailed steps to complete tasks supporting departmental or organizational policies are typically documented in:",
    "options": ["", "A. Standards", "B. Procedures", "C. Regulations", "D. Policies"],
    "correctAnswer": "B"
  },
  {
    "question": "The predetermined set of instructions or procedures to sustain business operations after a disaster is commonly known as:",
    "options": ["", "A. Disaster Recovery Plan", "B. Business Impact Analysis", "C. Business Continuity Plan", "D. Business Impact Plan"],
    "correctAnswer": "C"
  },
  {
    "question": "Security posters are an element PRIMARILY employed in: ",
    "options": ["", "A. Incident Response Plans", "B. Business Continuity Plans", "C. Physical Security Controls", "D. Security Awareness"],
    "correctAnswer": "D"
  },
  {
    "question": "Which type of attack has the PRIMARY objective controlling the system from outside?",
    "options": ["", "A. Rootkits", "B. Cross-Site Scripting", "C. Trojans", "D. Backdoors"],
    "correctAnswer": "D"
  },
  {
    "question": "Which of the following Cybersecurity concepts guarantees that information is accessible only to those authorized to access it?",
    "options": ["", "A. Non-repudiation", "B. Authentication", "C. Accessibility", "D. Confidentiality"],
    "correctAnswer": "D"
  },
  {
    "question": "Which of the following is LESS likely to be part of an Incident Response Team (IRT)?",
    "options": ["", "A. Representatives of senior management", "B. Human Resources", "C. Information security professionals", "D. Legal representatives"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of these is the most efficient and effective way to test a business continuity plan?",
    "options": ["", "A. Reviews", "B. Simulations", "C. Discussions", "D. Walkthroughs"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of the following areas is the most distinctive property of PHI?  ",
    "options": ["", "A. Integrity", "B. Non-repudiation", "C. Confidentiality", "D. Authentication"],
    "correctAnswer": "C"
  },
  {
    "question": "Which type of key can be used to both encrypt and decrypt the same message?",
    "options": ["", "A. A symmetric key", "B. A public key", "C. An asymmetric key", "D. A private key"],
    "correctAnswer": "A"
  },
  {
    "question": "Logging and monitoring systems are essential to:",
    "options": ["", "A. Identifying inefficient performing systems, preventing compromises, and providing a record of how systems are used", "B. Identifying inefficient performing systems, detecting compromises, and providing a record of how systems are used", "C. Identifying efficient performing systems, labeling compromises, and providing a record of how systems are used", "D. Identifying efficient performing systems, detecting compromises, and providing a record of how systems are used"],
    "correctAnswer": "B"
  },
  {
    "question": "Which of the following is NOT an element of System Security Configuration Management?",
    "options": ["", "A. Updates", "B. Baselines", "C. Audit logs", "D. Inventory"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of the following is a public IP?",
    "options": ["", "A. 10.221.128.1", "B. 192.168.123.1", "C. 13.16.123.1", "D. 172.16.123.1"],
    "correctAnswer": "C"
  },
  {
    "question": "Which of these is the PRIMARY objective of a Disaster Recovery Plan?",
    "options": ["",
      "A. Communicate to the responsible entities the damage caused to operations in the event of a disaster",
      "B. Restore company operation to the last-known reliable operation state",
      "C. Maintain crucial company operations in the event of a disaster",
      "D. Outline a safe escape procedure for the organization's personnel"
    ],
    "correctAnswer": "B"
  },
  {
    "question": "After an earthquake disrupting business operations, which document contains the procedures required to return business to normal operation?",
    "options": ["",
      "A. The Disaster Recovery Plan",
      "B. The Business Impact Plan",
      "C. The Business Continuity Plan",
      "D. The Business Impact Analysis"
    ],
    "correctAnswer": "A"
  },
  {
    "question": "According to (ISC)², which are the six phases of data handling?",
    "options": ["",
      "A. Create → Share → Use → Archive → Store → Destroy",
      "B. Create → Share → Use → Store → Archive → Destroy",
      "C. Create → Use → Store → Share → Destroy → Archive",
      "D. Create → Store → Use → Share → Archive → Destroy"
    ],
    "correctAnswer": "D"
  },
  {
  "question": "The implementation of Security Controls is a form of:",
  "options": ["",
    "A. Risk reduction",
    "B. Risk transference",
    "C. Risk acceptance",
    "D. Risk avoidance"
  ],
  "correctAnswer": "A"
  },
  {
  "question": "Which devices would be more effective in detecting an intrusion into a network?",
  "options": ["",
    "A. HIDS",
    "B. Firewalls",
    "C. Routers",
    "D. NIDS"
  ],
  "correctAnswer": "D"
  },
  {
  "question": "According to the canon: Provide diligent and competent service to principals, (ISC)² professionals are to:",
  "options": ["",
    "A. Treat all members fairly and, when resolving conflicts, consider public safety and duties to principals, individuals and the profession, in that order",
    "B. Promote the understanding and acceptance of prudent information security measures",
    "C. Avoid apparent or actual conflicts of interest",
    "D. Take care not to tarnish the reputation of other professionals through malice or indifference"
  ],
  "correctAnswer": "C"
  },
  ];

  var questionsContainer = document.getElementById("questions");

  // Function to create MCQ elements
  function createMCQElement(questionObj, index) {
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.textContent = (index + 1) + ". " + questionObj.question;
    div.appendChild(label);

    var select = document.createElement("select");
    select.name = questionObj.question;
    questionObj.options.forEach(function(option, optionIndex) {
      var optionElement = document.createElement("option");
      optionElement.value = optionIndex === 0 ? "" : String.fromCharCode(64 + optionIndex); // Convert index to option letter
      optionElement.textContent = option;
      select.appendChild(optionElement);
    });
    select.addEventListener("change", function() {
      select.disabled = true; // Disable the dropdown after selection
    });
    div.appendChild(select);
    questionsContainer.appendChild(div);
  }

  // Create MCQ elements from JSON
  questions.forEach(function(question, index) {
    createMCQElement(question, index);
  });

  // Stopwatch
  var startTime;
  var timeLimit = 120 * 60 * 1000; // 120 minutes in milliseconds
  var timerInterval;

  function updateTimer() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;
    var minutes = Math.floor(elapsedTime / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);
    document.getElementById("timer").textContent = "Elapsed Time: " + padNumber(minutes) + ":" + padNumber(seconds);
  }

  function padNumber(num) {
    return num < 10 ? "0" + num : num;
  }

  document.getElementById("startBtn").onclick = function() {
      document.getElementById("startBtn").style.display = "none";
      document.getElementById("hide").style.display = "block";
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);
  };

  document.getElementById("examForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if time is over
    var currentTime = Date.now();
    var timeDifference = currentTime - startTime;
    if (timeDifference >= timeLimit) {
      clearInterval(timerInterval);
      alert("Time limit exceeded! You are not allowed to submit.");
      return;
    }

    // Get form values
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var examCode = document.getElementById("examCode").value;
    
    // Calculate total obtained marks
    var totalMarks = 0;
    questions.forEach(function(question, index) {
      var selectedOption = document.querySelector('select[name="' + question.question + '"]').value;
      if (selectedOption === question.correctAnswer) totalMarks += 1;
    });

    // Calculate time required
    var timeRequired = Math.floor(timeDifference / 1000 / 60) + ":" + padNumber(Math.floor((timeDifference / 1000) % 60));
    
    // Generate WhatsApp code and encrypt
    var whatsAppCode = encrypt(name + "_" + mobile + "_" + examCode + generateAnswerString() + "_MO_" + totalMarks + "_T" + timeRequired);
    
    // Send WhatsApp code to the specified number
    var whatsappNumber = "+8801515283462"; // Change this to your WhatsApp number
    var whatsappMessage = whatsAppCode;
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodeURIComponent(whatsappMessage);
    window.open(whatsappLink);
  };

  // Show correct answers when button clicked
  document.getElementById("showAnswers").onclick = function() {
    var correctAnswers = questions.map(function(question, index) {
      return (index + 1) + ". " + question.correctAnswer;
    });
    alert("Correct Answers:\n" + correctAnswers.join(", "));
  };

  // Unicode-based encryption function
  function encrypt(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      // Shift the character code by a fixed number (e.g., 3) and convert it back to a character
      var encryptedCharCode = charCode + 5;
      result += String.fromCharCode(encryptedCharCode);
    }
    return result;
  }

  // Generate answer string for WhatsApp code
  function generateAnswerString() {
    var answerString = "_A_";
    questions.forEach(function(question, index) {
      var selectedOption = document.querySelector('select[name="' + question.question + '"]').value;
      answerString += (index + 1) + "-" + selectedOption + ", ";
    });
    return answerString.slice(0, -2); // Remove trailing comma and space
  }
