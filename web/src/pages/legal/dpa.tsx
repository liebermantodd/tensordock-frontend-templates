import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/head';
import Loader from '../../components/loader';

const LegalDPA = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set the page title
    document.title = "Data Processing Agreement - Blue Lobster, Inc.";

    // Add the necessary stylesheets
    const linkElements = [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700|Poppins:300,400,500,600,700,800,900&display=swap", rel: "stylesheet" },
      { href: "/static/css/theme.bundle.css", rel: "stylesheet" },
      { href: "/static/css/custom.css", rel: "stylesheet" }
    ];

    linkElements.forEach(link => {
      const linkElement = document.createElement('link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Cleanup function
    return () => {
      linkElements.forEach(link => {
        const existingLink = document.head.querySelector(`link[href="${link.href}"]`);
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
      });
    };
  }, []);

  useEffect(() => {
    // When everything is loaded, set isLoading to false
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
        <h1 className="text-3xl font-bold mb-6">Data Processing Agreement</h1>
        
        <div className="space-y-6">
          <p><strong>Data Processing Agreement
          Last updated: May 15, 2024</strong></p>

          <p>Blue Lobster Data Processing Agreement (DPA)</p>

          <p>This Data Processing Agreement ("DPA") is subject to, incorporated with, and part of, the Blue Lobster Terms of Service ("TOS") and is entered into between Blue Lobster, Inc. ("Blue Lobster") and the customer identified in the TOS ("Customer"). Blue Lobster and the Customer are referred to as "Parties" herein, and are individually known as a "Party".</p>

          <p>The parties agree as follows:</p>

          <h3>1. Definitions</h3>
          <p>"Process" or "Processing" is any method, operation, or set of operations that is accomplished upon Personal Data, such as collection, recording, organization, structuring, storage, change or alteration, retrieval, consultation, use, disclosure through transmission, dissemination or other processes applicable Data Protection Laws specify.</p>
          <p>"Processor" is an entity that, on behalf of the Controller, processes Personal Data.</p>
          <p>"Security Incident" is any event that poses a threat to the safety, privacy, or integrity of Personal Data or the physical, technical, administrative, or organizational safeguards installed to defend it. This is subject to Data Protection Laws that are relevant.</p>
          <p>"Service Provider" is a Processor of Personal Data as described in relevant Data Protection Laws.</p>
          <p>"Standard Contractual Clauses" are Standard Contractual Clauses subject to applicable Data Protection Laws.</p>
          <p>"Sub-processor" means any Processor used by Blue Lobster or its associates to help in satisfying its duties with regards to Blue Lobster Services pursuant to the TOS or this DPA.</p>

          <h3>2. Applicability</h3>
          <p>This DPA applies wherein to the volume that Blue Lobster uses Personal Data on behalf of the Customer or its Authorized Affiliates while providing Blue Lobster Services. This is subject to applicable Data Protection Laws.</p>

          <h3>3. Processing of Personal Data</h3>
          <h4>Role of the Parties</h4>
          <p>The Parties agree that during the Processing of Personal Data, Data Protection Laws that outline the Parties' relation as one of a Controller and a Processor. The Customer is the Controller and Blue Lobster is the Processor. The Parties agree that during the Processing of Personal Data subject to applicable Data Protection Laws, that outline the Parties' relation as one among an enterprise and a Service Provider, Blue Lobster is the Service Provider. The Parties agree that during the Processing of Personal Data subject to Data Protection Laws, the Parties' relation is one of a Personal Information Processor and an Entrusted Party. The Customer is the Personal Information Processor and Blue Lobster is the Entrusted Party. Nothing on this DPA or TOS will be construed as Blue Lobster having a direct relation with the clients or customers of the Customer or its Authorized Affiliates or that Blue Lobster is appearing as a Controller under Data Protection Laws.</p>

          <h4>Customer Obligations</h4>
          <p>The Customer shall, in its use of Blue Lobster Services, Process Personal Data according to, and in compliance with all relevant laws, such as, with no limitation, Data Protection Laws. The Customer has sole responsibility for the accuracy, standard, and legality of Personal Data, and the method through which the Customer received any Personal Data, such as, with no limitation, receiving the permission of every Data Subject and making sure the accuracy of all Personal Data is maintained.</p>

          <h4>Blue Lobster Processing of Personal Data</h4>
          <p>Blue Lobster consents to the Processing of Personal Data on behalf of and according to the Customer's documented written consent in reference to: (i) Processing according to this DPA and the TOS; (ii) Processing involving the imparting of Blue Lobster Services; or (iii) Processing in any other case required pursuant to relevant Data Protection Laws. The Parties agree that this DPA and the TOS set out Customer's entire commands to Blue Lobster on the subject of the Processing of Personal Data and any processing not in the scope of such commands (if any) shall require an existing written contract between the Customer and Blue Lobster.</p>

          <h3>4. Sub-processing</h3>
          <h4>Authorized Sub-processors</h4>
          <p>The Customer knows and consents to the fact that Blue Lobster may also involve Sub-processors every now and then to maintain Personal Data on the Customer's or its Authorized Affiliates' behalf. The Customer permits the usage of Blue Lobster's contemporary Sub-processors, a listing that is available upon request. In the event that Blue Lobster intends to involve a brand new Sub-processor with relation to Blue Lobster Services, Blue Lobster will modify the list with or without notifying the Customer.</p>

          <h4>Sub-processor Obligations</h4>
          <p>When relevant, Blue Lobster shall: (i) enter into a written agreement with the Sub-processor enforcing data protection that require the Sub-processor to defend the Personal Data to the standard required through Data Protection Laws; and (ii) continue to be accountable for its compliance with the duties of this DPA and for any acts or omissions of the Sub-processor that require Blue Lobster to breach any of its duties in this DPA.</p>

          <h3>5. Security</h3>
          <h4>Security Measures</h4>
          <p>Blue Lobster shall put in force and keep suitable technical and organizational security features to defend Personal Data from Security Incidents and to maintain the safety and confidentiality of the Personal Data, according to Blue Lobster's protection requirements defined here ("Security Measures").</p>

          <h4>Confidentiality of Processing</h4>
          <p>Blue Lobster shall make certain that any person authorized by Blue Lobster to maintain Personal Data (such as its staff, retailers and subcontractors) will be under the precise responsibility of confidentiality (whether or not it is a contractual or statutory duty).</p>

          <h4>Security Incident Response</h4>
          <p>Upon noticing a Security Incident, Blue Lobster shall notify Customers without undue untimeliness, and shall offer well-timed statistics referring to the Security Incident as they become available, or as within reason, upon a Customer's request.</p>

          <h4>Updates to Security Measures</h4>
          <p>Customer recognizes that the Security Measures are subject to technical developments and improvements, and that Blue Lobster may also replace or revise Security Measures every now and then, with or without notifying the Customer.</p>

          <h3>6. Security Reports and Audits</h3>
          <p>Upon Customer's written request, Blue Lobster shall offer (on a private basis) copies of applicable outside certifications, audit documentation summaries and/or different documentation fairly requested by the Customer to affirm Blue Lobster's compliance with this DPA. Blue Lobster shall in addition offer written responses (on a private basis) to all acceptable requests for statistics made by Customer, such as responses to information security and audit questionnaires, that Customer (appearing fairly) considers important to verify Blue Lobster's compliance with this DPA, supplied that Customer shall not exercise this right more than once a year.</p>

          <h3>7. International Transfers</h3>
          <p>If Data Protection Laws limit cross-border Personal Data transfers, the Customer will instruct its Authorized Affiliates so, and only transfer that Personal Data to Blue Lobster under the subsequent conditions: (i) Blue Lobster, both via its vicinity or participation in a legitimate cross-border transfer mechanism under Data Protection Laws, as recognized in applicable documents, may also legally acquire that Personal Data, or (ii) the transfer in any other case complies with Data Protection Laws for the motives set forth in applicable documents. If any Personal Data switch among Customer and Blue Lobster calls for the execution of Standard Contractual Clauses as a way to follow Data Protection Laws, the Parties agree the Standard Contractual Clauses will thereby be deemed included herein, and take all other moves required to legitimize the transfer. In the occasion of a struggle or inconsistency among this DPA and the Standard Contractual Clauses, the Standard Contractual Clauses shall prevail.</p>

          <h3>8. Return or Deletion of Data</h3>
          <p>Upon deactivation of Blue Lobster Services, all Personal Data will be deleted pursuant to Blue Lobster's retention and removal policies. Notwithstanding the foregoing, Blue Lobster reserves the right to hold applicable records and statistics whilst required through relevant law; whilst below a courtroom docket order, subpoena, or different criminal order; or whilst maintaining proof following or in anticipation of a civil or criminal lawsuit.</p>

          <h3>9. Cooperation</h3>
          <h4>Cooperation</h4>
          <p>Blue Lobster shall (at Customer's expense), taking into consideration the character of the processing, offer reasonable cooperation to help the Customer in responding to a Data Subject request made under relevant Data Protection Laws referring to the processing of Personal Data under the TOS. In the event that this type of Data Subject request is made directly to Blue Lobster, Blue Lobster shall not reply to such request directly without the Customer's earlier authorization, until legally forced to do so (as determined in Blue Lobster's true faith and discretion). If Blue Lobster must reply to a Data Subject request, Blue Lobster shall directly notify Customer and offer the Customer with a replica of such Data Subject Request (to the volume legally allowed).</p>

          <h4>Data Impact Assessment</h4>
          <p>To the extent Blue Lobster is required under relevant Data Protection Laws, Blue Lobster shall (at Customer's expense) offer fairly requested statistics concerning Blue Lobster's Processing of Personal Data below the TOS to permit the Customer to carry out information protection impact tests or previous consultations with information safety authorities as required through law.</p>

          <h3>10. Sale of Personal Data</h3>
          <p>Blue Lobster shall: (a) not sell the Personal Data (including to the volume of the definition of "sell" as described in applicable laws); (b) not hold, use or reveal Personal Data for any reason aside from for acting in the Blue Lobster Services, in compliance with the TOS, or as in any other case authorized through relevant Data Protection Laws; (c) not hold, use or reveal the Personal Data for a business motive (such as to the volume of the definition of "business motive" as described in applicable laws) aside from the agreed functions set forth in the TOS; and (d) not hold, use, or reveal Personal Data outside of the direct business relationship among Blue Lobster and the Customer, except as may in any other case be supplied in this DPA. Blue Lobster hereby certifies that it knows and is inclined to abide by the regulations in this Section.</p>

          <h3>11. Miscellaneous</h3>
          <h4>Notice Requirements</h4>
          <p>Any notices required to be introduced by Blue Lobster to customers will be sent directly. Any notices required to be introduced by Customer to Blue Lobster hereunder will be sent to support@BlueLobster.com.</p>

          <h4>Term</h4>
          <p>Blue Lobster will Process Personal Data during the course of this DPA, except in any other case that is agreed in writing.</p>

          <h4>Severability</h4>
          <p>If one or more provisions of this DPA are held to be unenforceable under relevant law, the Parties conform to renegotiate such provision(s) in good standing. In the occasion that such provision was not required by the Data Protection Laws and the Parties can't attain a collectively agreeable and enforceable replacement, then (a) such provision will be excluded from this DPA, (b) the stability of this DPA will be interpreted as though such provision were so excluded, and (c) the stability of this DPA will be enforceable in accordance with its terms.</p>

          <h4>Limitation of Liability</h4>
          <p>Each Party's legal responsibility arising out of or associated with this DPA, whether or not in contract, tort or under another principle of legal responsibility, is subject to those boundaries of legal responsibility set forth in the TOS and any reference in the TOS restricting a Party's liability means the aggregate legal responsibility of that Party below the TOS and this DPA.</p>
        </div>
      </div>
    </div>
  );
};

export default LegalDPA;