import React, { useEffect } from 'react';

const LegalTOS = () => {
  useEffect(() => {
    // Set the page title
    document.title = "Terms of Service - Blue Lobster, Inc.";

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

  return (
  <div className="mt-6 flex flex-wrap justify-left gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
  <p><strong>Terms of Service</strong></p>
  <p><strong>Last updated:</strong> May 15, 2024</p>

  <p><strong>Agreement to Terms</strong></p>

  <p>By creating an account and using Blue Lobster Services, you acknowledge and agree to be legally bound by these Terms of Service. Your continued usage of the services implies compliance with these terms alongside all applicable laws, rules, and regulations.</p>

  <p>This page contains Blue Lobster's Terms of Service (TOS). It is a binding contract between Blue Lobster and the Customer upon Customer account creation on the Blue Lobster Services, which includes all of Blue Lobster's websites, services, products and solutions.</p>

  <p>As mentioned, this TOS is a binding legal contract between the customer and company. As a result, in order to use Blue Lobster Services, you must agree to the TOS. Agreeing means that you give permission to be bound by the TOS. By creating an Account and using Blue Lobster Services, you are sending us the impression that:</p>
  <p>After account creation, you will use Blue Lobster Services in proper compliance with all laws, rules and regulations applicable to you.</p>
  <p>When a person over 18 years of age is the customer, using our Services adheres to giving us legal consent and agreeing to the prudential use of Blue Lobster Services in applicable jurisdictions.</p>
  <p>When a person creates an Account and uses Blue Lobster Services on behalf of an organized entity, they bind the entity they represent to this TOS and they agree to be legally bound by this TOS on the entity's behalf.</p>
  <p>There are other documents applying to the Customer's use of Blue Lobster Services, and the terms contained in those documents are incorporated into this TOS. The Customer should review the other documents, which include the privacy policy and acceptable use policy.</p>

  <p><strong>Definitions</strong></p>

  <p>The following definitions apply to the TOS:</p>

  <p><strong>"Customer Data"</strong> means:</p>
  <p>All data uploaded by the Customer to Blue Lobster services and</p>
  <p>All data created by the Customer on Blue Lobster services.</p>

  <p><strong>"Covered Service"</strong> means:</p>
  <p>Instances in Multiple Regions.</p>
  <p>One Instance.</p>

  <p>The applicable region indicated in Blue Lobster's Customer documentation, marked by geographical placement, such as CT1, NY1, as timely updated by Blue Lobster, is referred to as <strong>"Region."</strong></p>

  <p>One virtual machine or container instance that's part of Blue Lobster's Services is referred to as a <strong>"single instance."</strong></p>

  <p><strong>Default Payment Terms and Billing</strong></p>

  <p>All fees for Blue Lobster Services are subject to change at Blue Lobster's discretion.</p>

  <p>Blue Lobster uses Stripe, a third-party payment processor, to charge your credit card and bill you for our Services (known here as the "Payment Processors"). In addition to this TOS, payment processing may be subject to the Payment Processors' terms, restrictions, and policies. Blue Lobster is not liable for the Payment Processors' decisions. When the Customer pays for used Services, they must do so in compliance with these pricing and billing policies. When completing the payment, the Customer grants Blue Lobster and its Payment Processors the authority to deduct or charge money (including all taxes applicable) using the payment method(s) provided by the Customer.</p>

  <p>The Customer must submit accurate and up to date billing information, and must correct all changes such as a billing address change, in a timely manner. If a payment method is canceled by the provider or otherwise rendered unusable, the Customer must inform Blue Lobster or the Payment Processors as soon as possible.</p>

  <p>Except for prepaid rendering services, Blue Lobster services are billed monthly based on the Customer's usage for the previous month. Unless otherwise agreed to with Blue Lobster, fees are due upon invoice issuance, which will be billed at the usage rates for that time period. The Payment Methods will be immediately charged to the Customer. For non or late payments, and/or failure to maintain current, valid, complete, and accurate Payment Methods, Blue Lobster possesses the authority to disable, cancel, deny entry to, restrict services for, and/or suspend or delete a Customer's account or access to any Blue Lobster Service.</p>

  <p>All Blue Lobster Service fees that are past due, regardless of the reason, are subject to a 1.5% monthly interest (or to the greatest rate legally allowed, whichever is lower) from the due date until the payment is made. The Customer shall be held liable for all reasonable expenditures (including attorneys' fees) resulting from the collection of past due fees from the customer. After we give you written notification of late payment, we may suspend your Service access if Fees remain due. You are not permitted to withhold or offset any sums owed by you under this Agreement for any reason.</p>

  <p>All charges from the Customer's purchase of Blue Lobster services, including but not limited to national, state, or local sales taxes, use taxes, value-added taxes, and goods and services taxes, are the sole responsibility of the Customer. Blue Lobster's pricing policies are not affected by such Taxes unless otherwise specified. Taxes will be levied during billing or at the time of purchase if Blue Lobster is required to do so. Blue Lobster may collect additional taxes for remission to the appropriate taxation authorities if the purchase of Blue Lobster Services is subject to them. In order to comply with these tax duties, the customer must also give any tax identification information that is required. Any tax misrepresentations or non-compliance caused by the customer is his or her sole responsibility.</p>

  <p>For infractions, such as abuse, misrepresentation of Billing Information, unauthorized transfer, or illegal conduct by the Customer, Blue Lobster reserves the right to revoke all prepaid credits, or subject them to early expiration.</p>

  <p><strong>Request for Credit</strong></p>

  <p>The Customer must notify Blue Lobster within ten days of becoming eligible to obtain prepaid credit in order to get any. Blue Lobster must be given server log files demonstrating the loss of external connectivity and the date and time the issues occurred. Prepaid Credit shall be forfeited if the Customer does not comply with these restrictions. Blue Lobster will in good prudence, make an assessment based on its system logs, monitoring reports, configuration records, and other available information if a disagreement occurs.</p>

  <p><strong>Exclusions</strong></p>

  <p>Prepaid credits are not applicable to features designated as having pre-general availability (unless otherwise stated), features that are excluded from the TOS (as stated in the accompanying documentation), or errors caused by factors beyond Blue Lobster's reasonable control. In addition, they may be caused by Customer's software or hardware, and/or third-party software or hardware, TOS violations, system quotas, or downtime caused by in-advance servicing conveyed to the customer. Customer will only be eligible for prepaid credit if a certain instance is down as either one instance or Instances in Multiple Regions. It cannot be both.</p>

  <p><strong>Intellectual Property Rights</strong></p>

  <p>No party is granted implied or explicit rights to the content or intellectual property of the other under this TOS. Customer Data rights are given to the Customer, and Blue Lobster owns all rights to the Blue Lobster Services and related software, that includes third party software.</p>

  <p>The Customer herewith gives Blue Lobster powers to exploit Customer Feedback in any way and for all intents. The Customer may choose to provide ideas and feedback regarding problems with or suggested changes to any of Blue Lobster's products and services.</p>

  <p>Blue Lobster has the right to use the Customer's name, logos, and trademarks in its materials and communications for all intents and purposes. Blue Lobster provides Customers restricted permission to use Blue Lobster Services as stated in and subject to strict compliance with this TOS.</p>

  <p><strong>Customer Data Use</strong></p>

  <p>Blue Lobster will only manage Customer Data in accordance with the current version of its Privacy Policy.</p>

  <p>The Customer grants Blue Lobster the authority to host, retain, transmit, exhibit, perform, duplicate, and alter for the purpose delivering Blue Lobster services to the Customer, pursuant to this TOS.</p>

  <p>The Customer is fully accountable for its Customer Data and acknowledges that Blue Lobster is not and never will be found accountable. The Customer asserts, denotes, and warrants that: its use of Blue Lobster Services will not violate this TOS, accompanying documentation, or any applicable law, regulation, rule, or third-party protections, it is entirely responsible for the development, moderation, functionality, upkeep, support, and use of Customer Data. That includes Customer Data that's provided by the Customer's end users. Customer Data cannot: infringe, violate, or misappropriate any third-party protections, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary rights that can be claimed. Slander, defamation, libel, privacy invasion, publicity or property rights violations are also not allowed under any circumstances.</p>

  <p><strong>Conduct Rules</strong></p>

  <p>Blue Lobster Services must be used in compliance with the Blue Lobster AUP and other accompanying documents. Upon reference, they are incorporated. As a result, any AUP violations will be considered a violation of this TOS as well.</p>

  <p>Whether the actions are performed by a Customer, their employees, a third party connected to the Customer, Customer's end users, licensees, or customers, the Customer is entirely responsible for what occurs.</p>

  <p>Customers are liable for informing their employees, agents, and others about this TOS's requirements, including if the TOS requirements bind them. In their use of Blue Lobster Services, Customers may not directly or indirectly decipher, reverse engineer, disassemble, or otherwise attempt to pirate any of Blue Lobster's information. All local, state, national, and international rules and regulations that are applicable must be followed by the customer.</p>

  <p>Blue Lobster will exercise the ability to access, read, maintain, and disclose information needed to comply with any applicable law, regulation, legal procedure, or valid governmental request, enforce this TOS through possible investigation, detect, prevent, or deal with fraud, security, or operational problems, respond to customer inquiries, and safeguard property, rights, or safety of Blue Lobster's interests.</p>

  <p>The Office of Foreign Assets Control ("OFAC") maintains trade and economic sanctions against Blue Lobster Services. In using Blue Lobster services, the Customer agrees to follow these laws and regulations by using the Services in an appropriate manner. The Customer guarantees that it is not located in a country subject to OFAC's trade and economic sanctions, or is an individual or entity listed on any US lists of prohibited parties, such as the Treasury Department's List of Specially Designated Nationals, and Sectoral Sanctions List. Furthermore, Customer agrees not to sell, export, reexport, transfer, divert, or dispose of any Blue Lobster Service, whether directly or indirectly.</p>

  <p>Customers must follow adequate security standards, including but not limited to: creating strong passcodes and access control systems, securing access to all passcodes and entry data, and confirming the reliability of those who have account passcodes and entry data. Any inappropriate access to the Customer's Account is the complete responsibility of the Customer, who must contact Blue Lobster promptly upon becoming aware of such inappropriate access. The Customer will immediately inform Blue Lobster of any security incidents or breaches impacting Blue Lobster Services, including unauthorized access to Customer's data, and will cooperate with authorities and/or Blue Lobster in any investigation or legal action taken to investigate and remedy the security incident.</p>

  <p><strong>Customer Deletion</strong></p>

  <p>During the Term consistent with Service functionality, Blue Lobster will allow Customers to erase their Data in accordance with tis TOS. If the Customer uses Services to remove any information that cannot be recovered, the Customer is instructing Blue Lobster to erase the Customer's relevant Data from Blue Lobster's systems in compliance with applicable legislation. Blue Lobster will adhere to this direction as soon as practically possible, but no later than 180 days.</p>

  <p><strong>Deletion Upon Termination</strong></p>

  <p>Customers may direct Blue Lobster to erase all of their Data (including preexisting backups) from Blue Lobster's systems in accordance with applicable legislation after the Customer's account is closed. Blue Lobster will comply with the directive as soon as possible under ideal conditions and within a maximum time of 180 days after the closure, all after a recovery period of thirty days. Customers are liable for retaining any Customer Data it desires to save before the Customer Account data is deleted.</p>

  <p><strong>Incidents Involving Data</strong></p>

  <p><strong>Notification of an Incident</strong></p>

  <p>Upon being informed of a data security issue, Blue Lobster shall notify Customers quickly, without unneeded delay, and will take all commercially reasonable actions to limit harm and secure the Customer's Data.</p>

  <p><strong>Information on the Data Security Incident</strong></p>

  <p>Blue Lobster shall reasonably disclose the nature of the data data security security issue, the actions taken to remedy potential risks, and the measures Blue Lobster advised Customers take in order to resolve the data security incident.</p>

  <p><strong>Notification Delivery</strong></p>

  <p>Any data security issue notification(s) will be sent to the email address supplied by the Customer.</p>

  <p><strong>Blue Lobster's Lack of Assessment of Customer Data</strong></p>

  <p>Blue Lobster is under no duty to review Customer Data in order to identify information that may be subject to legal requirements.</p>

  <p><strong>Blue Lobster Has No Acknowledgement of Fault</strong></p>

  <p>An admission of fault or liability on Blue Lobster's part should not be interpreted from our response to a data security event.</p>

  <p><strong>No Warranty</strong></p>

  <p>Blue Lobster Services are provided "as is" and "as available". Blue Lobster makes no warranties of any kind, whether expressly stated or implied, in connection with Blue Lobster Services and all content delivered thereto. Without limitation including any implied warranty of merchantability, fitness for a specific purpose, title, or non-infringement, course of dealing that results in a warranty, usage, trade, or any availability, accuracy, or system access-related warranty. Blue Lobster makes no guarantees that its services will be secure or available at different areas or times, no guarantees of imperfection correction, no guarantees that any material accessible through Blue Lobster Services will be virus or risky component-free, and no guarantees that Customer's expectations will be met through the use of Blue Lobster Services. Customers are responsible for ensuring the integrity of their environments.</p>

  <p>To the fullest extent permissible by law, the limitations, exclusions, and disclaimers in this section apply. Blue Lobster does not renounce warranties or other rights it is not permitted by law to disclaim.</p>

  <p><strong>Indemnification</strong></p>

  <p>You agree to safeguard, indemnify, and hold Blue Lobster, its licensees, licensors, employees, contractors, agents, officers, and directors harmless from, as well as against all claims, damages, obligations, losses, liabilities, costs, debt, and expenses (including but not restricted to attorney's fees) coming from your or anyone using your Account's use of Blue Lobster's Services, your Customer Data, or a violation of these TOS.</p>

  <p><strong>Limitation of Liability</strong></p>

  <p>YOU WILL MAINTAIN Blue Lobster AND ITS OFFICERS, AGENTS, DIRECTORS, AND EMPLOYEES NOT LIABLE FOR ANY INDIRECT, CORRECTIVE, UNIQUE, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, EXCEPT WHEN THE LAW PROHIBITS IT. THAT IS REGARDLESS OF HOW IT SURFACED (INCLUDING ATTORNEYS' FEES AND ALL EXPENSES RELATED TO THE LEGAL PROCESS, OR AT TRIAL OR UPON APPEAL, IF ANY, REGARDLESS OF IF LITIGATION OR ARBITRATION WAS OR WAS NOT INSTITUTED), WHETHER IN CONTRACTUAL ACTIONS, NEGLIGENCE OR OTHER INAPPROPRIATE ACTION, OR SURFACING OUT OF OR IN CONNECTION TO THIS AGREEMENT, INCLUDING, WITH NO LIMITATIONS, ANY PERSONAL INJURY OR PROPERTY DAMAGE CLAIM, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, REGARDLESS OF WHETHER OR NOT THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE PREVIOUSLY. IF THE COMPANY IS FOUND LIABLE, IT WILL BE RESTRICTED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES DURING THE PREVIOUS 12 MONTHS, EXCEPT AS PROHIBITED BY LAW, AND UNDER NO INSTANCES WILL DAMAGES OF CONSEQUENTIAL OR PUNITIVE NATURE OCCUR. THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL, OR CONSEQUENTIAL DAMAGES.</p>

<p>Jurisdiction and Governing Law</p>

<p>Law that governs. The TOS, as well as any disputes arising out of it, are governed by the laws of the State of Delaware, without respect to considerations of conflict of laws.</p>

<p>For the resolution of any litigation or court process permitted under the TOS, the Customer and Blue Lobster will both submit to the personal and exclusive jurisdiction of the state courts and federal courts situated within the State of Delaware.</p>

<p>Terms of Service Modifications</p>

<p>Blue Lobster reserves the right to amend and/or modify the TOS for Blue Lobster Services at any time without prior notice to Customers. Customer use of Blue Lobster Services will always be governed by the TOS in place at the time. As a result, the Customer is responsible for learning about any changes to the TOS by revisiting this page.</p>

</div>

);
};

export default LegalTOS;