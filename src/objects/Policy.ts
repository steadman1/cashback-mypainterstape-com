class PolicySubContent {
  bullet: string;

  constructor(bullet: string) {
    this.bullet = bullet;
  }
}

class PolicyContent {
  subtitle: string;
  content: string;
  subContent?: PolicySubContent[];

  constructor(subtitle: string, content: string, subContent?: PolicySubContent[]) {
    this.subtitle = subtitle;
    this.content = content;
    this.subContent = subContent;
  }
}

class Policy {
  title: string;
  updated: string;
  content: PolicyContent[];

  constructor(title: string, updated: string, content: PolicyContent[]) {
    this.title = title;
    this.updated = updated;
    this.content = content;
  }

  static ponderPrivacyPolicy = new Policy(
    "Ponder Privacy Policy",
    "October 3, 2024",
    [
      new PolicyContent(
        "Introduction",
        `Welcome to Ponder ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our mobile application, Ponder (the "App"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the App.`,
        []
      ),
      new PolicyContent(
        "Information We Collect",
        `We collect information to provide and improve our services to you. The types of information we may collect include:`,
        [
          new PolicySubContent(
            `Personal Information: By default, we do not collect any personal information that identifies you as an individual, such as your name, email address, or contact details.`
          ),
          new PolicySubContent(
            `Non-Personal Information:`
          ),
          new PolicySubContent(
            `Device Information: We may collect information about your device, including the device model, operating system, unique device identifiers, and mobile network information.`
          ),
          new PolicySubContent(
            `Usage Data: We collect data about how you interact with the App, such as the features you use, the time and date of your visits, and other diagnostic data.`
          ),
          new PolicySubContent(
            `Advertising Data: Information collected for advertising purposes, including anonymized identifiers and demographic information.`
          ),
          new PolicySubContent(
            `Dream Entries and Related Data: Your dream entries and related content are stored locally on your device. We do not collect or access this data unless you explicitly opt-in to features that require it, such as dream analysis or automatic title and motif generation.`
          )
        ]
      ),
      new PolicyContent(
        "How We Use Your Information",
        `We may use the collected information for various purposes, including:`,
        [
          new PolicySubContent(
            `To Provide and Maintain Our Service`
          ),
          new PolicySubContent(
            `Ensure the App functions correctly on your device.`
          ),
          new PolicySubContent(
            `Provide customer support.`
          ),
          new PolicySubContent(
            `To Improve Our Service`
          ),
          new PolicySubContent(
            `Analyze usage patterns to enhance user experience.`
          ),
          new PolicySubContent(
            `Develop new features and services.`
          ),
          new PolicySubContent(
            `Advertising`
          ),
          new PolicySubContent(
            `Deliver personalized advertisements within the App based on non-personal information.`
          ),
          new PolicySubContent(
            `Dream Analysis and Feature Enhancement`
          ),
          new PolicySubContent(
            `If you opt-in, we use relevant content from your dream entries to provide analysis and generate titles and motifs through OpenAI's GPT API.`
          )
        ]
      ),
      new PolicyContent(
        "How We Share Your Information",
        `We may share your information in the following situations:`,
        [
          new PolicySubContent(
            `With Third-Party Service Providers`
          ),
          new PolicySubContent(
            `OpenAI's GPT API: If you opt-in to dream analysis or automatic title and motif generation, we share the necessary content with OpenAI's GPT API for processing. OpenAI's use of your data is governed by their own privacy policy.`
          ),
          new PolicySubContent(
            `Analytics Providers: We may use third-party service providers to monitor and analyze the use of our App.`
          ),
          new PolicySubContent(
            `With Advertising Partners`
          ),
          new PolicySubContent(
            `Share non-personal information to deliver personalized advertisements.`
          ),
          new PolicySubContent(
            `Legal Obligations`
          ),
          new PolicySubContent(
            `Disclose your information if required to do so by law or in response to valid requests by public authorities.`
          )
        ]
      ),
      new PolicyContent(
        "Data Security",
        `We prioritize the security of your data. Measures we implement include:`,
        [
          new PolicySubContent(
            `Encryption: Data transmitted to OpenAI's GPT API is encrypted in transit.`
          ),
          new PolicySubContent(
            `Access Controls: Restrict access to personal information to authorized personnel only.`
          ),
          new PolicySubContent(
            `Regular Assessments: Conduct security assessments to identify and mitigate vulnerabilities.`
          ),
          new PolicySubContent(
            `However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure.`
          )
        ]
      ),
      new PolicyContent(
        "Your Choices",
        `You have control over your information and how it is collected and used:`,
        [
          new PolicySubContent(
            `Opt-In Features`
          ),
          new PolicySubContent(
            `Dream Analysis and Automatic Title & Motif Generation: You can opt-in or opt-out of these features at any time through the App settings.`
          ),
          new PolicySubContent(
            `Advertising Preferences`
          ),
          new PolicySubContent(
            `Adjust your device settings to limit ad tracking or opt-out of personalized advertisements.`
          ),
          new PolicySubContent(
            `Device Permissions`
          ),
          new PolicySubContent(
            `Modify your device settings to control the App's access to certain information.`
          )
        ]
      ),
      new PolicyContent(
        "Children's Privacy",
        `Our App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.`,
        []
      ),
      new PolicyContent(
        "International Data Transfers",
        `Your information may be transferred to—and maintained on—computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ.`,
        []
      ),
      new PolicyContent(
        "Retention of Data",
        `We will retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Non-personal information used for analytics and advertising may be retained longer.`,
        []
      ),
      new PolicyContent(
        "Third-Party Links",
        `Our App may contain links to third-party websites or services that are not owned or controlled by us. We have no control over the content or privacy practices of these third parties.`,
        []
      ),
      new PolicyContent(
        "Changes to This Privacy Policy",
        `We may update our Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.`,
        []
      ),
      new PolicyContent(
        "Your Rights",
        `Depending on your jurisdiction, you may have the following rights:`,
        [
          new PolicySubContent(
            `Access: Request access to the personal information we hold about you.`
          ),
          new PolicySubContent(
            `Correction: Request correction of any inaccurate or incomplete information.`
          ),
          new PolicySubContent(
            `Deletion: Request deletion of your personal information.`
          ),
          new PolicySubContent(
            `Objection: Object to the processing of your personal information.`
          ),
          new PolicySubContent(
            `Withdrawal of Consent: Withdraw your consent at any time where we are relying on consent to process your information.`
          )
        ]
      ),
      new PolicyContent(
        "Contact Us",
        `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:`,
        [
          new PolicySubContent(
            `Email: [Insert Email Address]`
          ),
          new PolicySubContent(
            `Address: [Insert Mailing Address]`
          ),
          new PolicySubContent(
            `Phone: [Insert Phone Number]`
          )
        ]
      )
    ]
  );

  static ponderTermsOfService = new Policy(
    "Ponder Terms of Service",
    "October 3, 2024",
    [
      new PolicyContent(
        "Acceptance of Terms",
        `By downloading, installing, or using the Ponder mobile application (the "App"), you ("User" or "you") agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use the App.`,
        []
      ),
      new PolicyContent(
        "Description of Service",
        `Ponder is a mobile application that allows users to record and analyze their dreams. Optional features include dream analysis and automatic title and motif generation, which utilize OpenAI's GPT API.`,
        []
      ),
      new PolicyContent(
        "Eligibility",
        `You must be at least 13 years old to use the App. By using the App, you represent and warrant that you meet the eligibility requirements.`,
        []
      ),
      new PolicyContent(
        "Changes to Terms",
        `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the App after changes constitutes your acceptance of the new Terms.`,
        []
      ),
      new PolicyContent(
        "User Accounts",
        `The App does not require you to create an account or provide personal identification information. All dream entries and related data are stored locally on your device unless you opt-in to certain features.`,
        []
      ),
      new PolicyContent(
        "Opt-In Features",
        `Participation in dream analysis and automatic content generation is optional.`,
        [
          new PolicySubContent(
            `Opt-In Requirement: These features are optional and require your explicit consent.`
          ),
          new PolicySubContent(
            `Data Sharing: If you opt-in, relevant content from your dream entries will be sent to OpenAI's GPT API for processing.`
          ),
          new PolicySubContent(
            `Data Usage: OpenAI's use of your data is governed by their own privacy policy.`
          )
        ]
      ),
      new PolicyContent(
        "Data Collection and Privacy",
        `We collect non-personal information for advertising purposes. This may include device information and usage data. Unless you opt-in to the features mentioned above, no data is collected from your dream entries. For more information on how we collect and use data, please refer to our Privacy Policy.`,
        []
      ),
      new PolicyContent(
        "User Responsibilities",
        `You are responsible for ensuring that any information you provide is accurate and up-to-date. You are also responsible for maintaining the confidentiality and security of your device and any data stored on it.`,
        []
      ),
      new PolicyContent(
        "Prohibited Conduct",
        `You agree not to:`,
        [
          new PolicySubContent(
            `- Use the App for any unlawful purpose.`
          ),
          new PolicySubContent(
            `- Transmit any content that is illegal, harmful, or objectionable.`
          ),
          new PolicySubContent(
            `- Attempt to interfere with the App's functionality or security.`
          )
        ]
      ),
      new PolicyContent(
        "Intellectual Property Rights",
        `All content, features, and functionality of the App are owned by us or our licensors and are protected by intellectual property laws.`,
        [
          new PolicySubContent(
            `Our Content: All content, features, and functionality of the App are owned by us or our licensors and are protected by intellectual property laws.`
          ),
          new PolicySubContent(
            `Limited License: We grant you a non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.`
          )
        ]
      ),
      new PolicyContent(
        "User-Generated Content",
        `You retain ownership of any content you create within the App.`,
        [
          new PolicySubContent(
            `Ownership: You retain ownership of any content you create within the App.`
          ),
          new PolicySubContent(
            `License to Us: By using the App's opt-in features, you grant us a license to use your content as necessary to provide those features.`
          )
        ]
      ),
      new PolicyContent(
        "Third-Party Services",
        `We may use third-party services to enhance the App.`,
        [
          new PolicySubContent(
            `OpenAI's GPT API: If you opt-in to certain features, your data will be shared with OpenAI. We are not responsible for their services or policies.`
          ),
          new PolicySubContent(
            `Advertising Partners: We may use third-party advertising services. We are not responsible for the content of advertisements or the actions of advertisers.`
          )
        ]
      ),
      new PolicyContent(
        "Disclaimers",
        `The App is provided on an "as-is" and "as-available" basis.`,
        [
          new PolicySubContent(
            `As-Is Basis: The App is provided on an "as-is" and "as-available" basis.`
          ),
          new PolicySubContent(
            `No Warranties: We disclaim all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose.`
          ),
          new PolicySubContent(
            `No Liability: We are not liable for any damages arising from your use of the App.`
          )
        ]
      ),
      new PolicyContent(
        "Limitation of Liability",
        `To the fullest extent permitted by law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.`,
        []
      ),
      new PolicyContent(
        "Indemnification",
        `You agree to indemnify and hold us harmless from any claims arising out of your use of the App, violation of these Terms, or infringement of any rights of a third party.`,
        []
      ),
      new PolicyContent(
        "Termination",
        `We reserve the right to terminate or suspend your access to the App at our discretion.`,
        [
          new PolicySubContent(
            `Termination by You: You may stop using the App at any time.`
          ),
          new PolicySubContent(
            `Termination by Us: We may suspend or terminate your access to the App if you violate these Terms or for any other reason at our discretion.`
          )
        ]
      ),
      new PolicyContent(
        "Governing Law",
        `These Terms are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.`,
        []
      ),
      new PolicyContent(
        "Dispute Resolution",
        `Any disputes arising under these Terms shall be resolved through binding arbitration in accordance with the rules of the [Arbitration Association].`,
        []
      ),
      new PolicyContent(
        "Severability",
        `If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.`,
        []
      ),
      new PolicyContent(
        "Entire Agreement",
        `These Terms, along with the Privacy Policy, constitute the entire agreement between you and us regarding the use of the App.`,
        []
      ),
      new PolicyContent(
        "Contact Information",
        `If you have any questions or concerns about these Terms, please contact us at:`,
        [
          new PolicySubContent(
            `- Email: [Insert Email Address]`
          ),
          new PolicySubContent(
            `- Address: [Insert Mailing Address]`
          ),
          new PolicySubContent(
            `- Phone: [Insert Phone Number]`
          )
        ]
      )
    ]
  );
}

export default Policy;
