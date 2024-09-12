import React, { useEffect } from 'react';

const LegalAUP = () => {
  useEffect(() => {
    // Set the page title
    document.title = "Acceptable Use Policy - Blue Lobster, Inc.";

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
<div
  className="
    mt-6
    flex
    flex-wrap
    justify-left
    gap-6
    px-4
    sm:px-6
    md:px-8
    lg:px-12
  "
>

        <p><strong>Acceptable Use Policy (AUP)</strong></p>

        <p>Our acceptable use policy defines what you can and can't use Blue Lobster for</p>

        <p><strong>Last updated:</strong> May 15, 2024</p>

<p>This Acceptable Use Policy (“AUP”) is to establish what activities are permissible and not permissible while using Blue Lobster Services. This policy is not entirely comprehensive, and Blue Lobster, regardless of whether the activities or materials are described below, reserves the right to take corrective action.</p>

<p>Customers are responsible for AUP violations, regardless of whether someone was using the Customer’s account with or without permission. AUP violations by the Customer’s end users are also the liability of the Customer. Assisting in the violation of this AUP is also not permitted. Blue Lobster reserves the right to change this AUP at any time.</p>

<h3>Illegal or Abusive Activity or Content</h3>

<p>Prohibited activities include and are not limited to the following:</p>

<p><strong>Illegal Activities: </strong>Using Blue Lobster Services to engage in conduct or activities found by a court to be unlawful;</p>

<p><strong>Fraudulent or Harmful Activities:</strong> Engaging in or promoting activities that are deceptive, harmful, damaging, or misleading;</p>

<p><strong>Intellectual Property Violations: </strong>Using Blue Lobster Services to violate, infringe upon, or misappropriate intellectual property or proprietary right of a third party. That includes but is not limited to copyright, patent, trademark, trade secret, privacy and publicity violations;</p>

<p><strong>Illegal Pornography:</strong> Distributing child pornography or revenge porn;</p>

<p><strong>Threatening Content:</strong> Content that promotes or threatens terrorism, abuse, harrasment, or violence against any persons or organizations. In addition, content that promotes harm on the basis of race, ethnicity, national origin, religion, disability, or immigration status; and</p>

<p><strong>Controlled Substances: </strong>Selling or distributing controlled substances and prescription drugs in an unlawful manner.</p>


<h3>Security Violations</h3>

<p>Customers may not use Blue Lobster Services to disrupt the activities of any network, computer or communications System, software application, or networking device, with each being defined here as a System.</p>

<p>Prohibited activities include but are not limited to:</p>

<p><strong>Harmful Software: </strong>Technologies that may damage, interfere with, intercept, or expropriate any data or computer System. That includes but is not limited to viruses, malware, spyware, adware, worms, Trojan horses, or time bombs;</p>

<p><strong>Unauthorized Access: </strong>Using or accessing any System without permission for any purpose;</p>

<p><strong>Interception:</strong> Monitoring traffic or data collection on a System with no permission; and</p>

<p><strong>Falsification of Origin:</strong> Using improper TCP-IP packet headers, email headers, or any message portion that describes the route or origin. Aliases or anonymous remailers are exempt.</p>

<h3>Network Abuse</h3>

<p>The Customer may not make any connections to network infrastructure without proper consent.</p>

<p>Prohibited activities include but are not limited to:</p>


<p><strong>Monitoring: </strong> Monitoring a System in a manner that disrupts its activity, or collection of Blue Lobster Service content;</p>

<p><strong>Deceitful Actions: </strong>Introducing malware into Blue Lobster’s infrastructure, or collecting, transmitting, phishing. or using deceitful methods to gain data;</p>

<p><strong>Intentional Interference: </strong> Disrupting a System’s correct function, including using mail bombing, news bombing, broadcast attacks, flooding techniques, or DoS to overload it;</p>

<p><strong>Operation of Certain Network Services: </strong>Use of open proxies, open mail relays, open recursive domain name servers, and Tor exit nodes, is prohibited;</p>

<p><strong>Avoiding System Restrictions: </strong>Electronic or manual methods aimed at avoiding use limitations placed on a System;</p>

<p><strong>Retaliation Against Blue Lobster: </strong> Activities that can lead to retaliation against Blue Lobster, including Blue Lobster employees or servers;</p>

<p><strong>Cryptocurrency Mining: </strong> Mining cryptocurrencies without documented consent.</p>

<p><strong>Withholding Identity: </strong>Any conduct aimed at cloaking identity, contact information, or identification information, such as the practice of return mailing; and</p>


<p><strong>Vulnerability Testing</strong></p>

<p>Any attempt at conducting malware research, testing the vulnerability of or breaching a Blue Lobster system or network, without Blue Lobster’s documented permission.</p>

<p><strong>Blue Lobster Oversight</strong></p>

<p>Blue Lobster has no obligation to, but may exercise the right to investigate any possible violation of this AUP. We also reserve the right to investigate improper use of Blue Lobster Services by a Customer. Regarding those investigations, Blue Lobster may share any information to appropriate law enforcement officials, regulators, or other applicable third parties. Customer information and other appropriate data consistent with applicable law may also be shared. Blue Lobster has the ability to work with appropriate law enforcement agencies, regulators, and applicable third parties to assist in the prosecution of illegal conduct resulting from violations of this AUP.</p>

<p><strong>Consequences Resulting from AUP Violation</strong></p>

<p>If Blue Lobster finds a Customer violation of this AUP, Blue Lobster reserves the right to modify, and/or suspend or terminate a Customer’s use of company Services. Blue Lobster may also intercept or block any Customer or end user data in cases of AUP violation or illegal activity. Regardless of whether a violation is committed unintentionally or without the Customer’s permission, Blue Lobster’s right to suspend or terminate the Customer’s use of Blue Lobster Services will be applied. Under this AUP, Blue Lobster is not obligated to act at any given time. Blue Lobster may exercise that right at any time.</p>

<p><strong>Reporting AUP Violations</strong></p>

<p>If Customers notice possible violations of this AUP, they must notify Blue Lobster by providing a full explanation. Blue Lobster may request Customer’s assistance to resolve the violation at any time.</p>

</div>
 );
};

export default LegalAUP;