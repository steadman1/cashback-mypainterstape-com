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
    "October 4, 2024",
    [
      new PolicyContent(
        "AGREEMENT TO OUR LEGAL TERMS",
        `We are Painter's Tape Studios, doing business as Ponder ("Company," "we," "us," "our"). We operate the mobile application Ponder: Lucid Dream Journal (the "App"), as well as any other related products and services that refer or link to these legal terms (collectively, the "Services").
        You can contact us by email at hello@mypainterstape.com.
        These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Painter's Tape Studios, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        Notifications will be made through the Ponder iOS app.
        The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
        We recommend that you print a copy of these Legal Terms for your records.`,
        []
      ),
      new PolicyContent(
        "OUR SERVICES",
        `The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
        The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).`,
        []
      ),
      new PolicyContent(
        "INTELLECTUAL PROPERTY RIGHTS",
        `We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
        Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world. The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.
        Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
        - access the Services; and
        - download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use.`,
        []
      ),
      new PolicyContent(
        "USER REPRESENTATIONS",
        "By using the Services, you represent and warrant that:",
        [
          new PolicySubContent(
            "You have the legal capacity and you agree to comply with these Legal Terms"
          ),
          new PolicySubContent(
            "You are not under the age of 13"
          ),
          new PolicySubContent(
            "You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services"
          ),
          new PolicySubContent(
            "You will not access the Services through automated or non-human means, whether through a bot, script, or otherwise"
          ),
          new PolicySubContent(
            "You will not use the Services for any illegal or unauthorized purpose"
          ),
          new PolicySubContent(
            "Your use of the Services will not violate any applicable law or regulation"
          )
        ]
      ),
      new PolicyContent(
        "PRODUCTS",
        `All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.`,
        []
      ),
      new PolicyContent(
        "PURCHASES AND PAYMENT",
        `All purchases for the Services, including subscriptions and in-app purchases, are processed exclusively through Apple and the Apple App Store. We do not handle any payments directly, and we do not collect or store your payment information.
        
        You agree to comply with Apple’s payment terms and policies as outlined in the Apple Media Services Terms and Conditions. All billing, payment processing, and related legal matters are governed by Apple, and we have no responsibility for any issues arising from payment processing or related disputes.
      
        Any applicable sales tax will be determined and collected by Apple, as required by law, based on the location of your purchase. All payments are subject to Apple’s payment policies and will be charged in the currency specified by the App Store at the time of purchase.`
      ),

      new PolicyContent(
        "SUBSCRIPTIONS",
        `Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis until canceled. You can cancel your subscription via the iCloud account in the iOS App Store's Subscription menu. Fee changes may apply.`,
        []
      ),
      new PolicyContent(
        "REFUNDS POLICY",
        `All purchases made through the Services are processed by Apple via the Apple App Store. We do not handle payments or manage refunds directly. 
      
        As such, any requests for refunds must be submitted to Apple in accordance with their refund policies. Refunds are not guaranteed and are subject to Apple's discretion. Please refer to the Apple Media Services Terms and Conditions for more details on their refund process.
      
        All sales are considered final, and we do not provide refunds or returns for any purchases made through the Services.`,
        []
      ),
      new PolicyContent(
        "PROHIBITED ACTIVITIES",
        `You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.
        You agree not to:`,
        [
          new PolicySubContent(
            "Systematically retrieve data or other content from the Services"
          ),
          new PolicySubContent(
            "Trick, defraud, or mislead us or other users"
          ),
          new PolicySubContent(
            "Circumvent, disable, or interfere with security-related features"
          ),
          new PolicySubContent(
            "Disparage, tarnish, or harm us or the Services"
          ),
          new PolicySubContent(
            "Engage in unauthorized framing or linking to the Services."
          )
        ]
      ),
      new PolicyContent(
        "USER GENERATED CONTRIBUTIONS",
        "The Services do not allow users to submit or post content.",
        []
      ),
      new PolicyContent(
        "CONTRIBUTION LICENSE",
        `You agree that we may access, store, process, and use any information and personal data you provide, according to the Privacy Policy. By submitting suggestions or feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation.`,
        []
      ),
      new PolicyContent(
        "MOBILE APPLICATION LICENSE",
        `We grant you a revocable, non-exclusive, non-transferable license to install and use the App on devices you own, subject to these Legal Terms. You shall not decompile, reverse-engineer, or create derivative works from the App. Terms from the Apple Store or Google Play may also apply.`,
        []
      ),
      new PolicyContent(
        "THIRD-PARTY WEBSITES AND CONTENT",
        `The Services may contain links to third-party websites and content. We are not responsible for any third-party websites or content, including accuracy, privacy practices, or any losses caused by accessing third-party services.`,
        []
      ),
      new PolicyContent(
        "ADVERTISERS",
        `We allow advertisers to display their advertisements in certain areas of the Services. We provide the space for advertisements, but we have no relationship with the advertisers.`,
        []
      ),
      new PolicyContent(
        "SERVICES MANAGEMENT",
        `We reserve the right to manage the Services, including monitoring for violations of these Legal Terms, refusing or limiting access to the Services, or removing content without notice.`,
        []
      ),
      new PolicyContent(
        "PRIVACY POLICY",
        `We care about data privacy and security. Please review our Privacy Policy at https://ponder.mypainterstape.com/privacy. By using the Services, you agree to be bound by our Privacy Policy.`,
        []
      ),
      new PolicyContent(
        "TERM AND TERMINATION",
        `These Legal Terms remain in full force while you use the Services. We may terminate your use of the Services or delete any content you posted at any time without warning.`,
        []
      ),
      new PolicyContent(
        "MODIFICATIONS AND INTERRUPTIONS",
        `We reserve the right to change or remove the contents of the Services at any time without notice. We will not be liable for any interruptions or modifications to the Services.`,
        []
      ),
      new PolicyContent(
        "GOVERNING LAW",
        `These Legal Terms and your use of the Services are governed by the laws of Virginia, without regard to its conflict of law principles.`,
        []
      ),
      new PolicyContent(
        "DISPUTE RESOLUTION",
        `Any legal action shall be brought in state and federal courts located in Henrico, Virginia. Claims must be brought within one (1) year of the cause of action.`,
        []
      ),
      new PolicyContent(
        "CORRECTIONS",
        `We reserve the right to correct any errors or inaccuracies in the Services at any time without notice.`,
        []
      ),
      new PolicyContent(
        "DISCLAIMER",
        `The Services are provided "as-is" without warranties. We disclaim all warranties to the fullest extent permitted by law.`,
        []
      ),
      new PolicyContent(
        "LIMITATIONS OF LIABILITY",
        `In no event will we be liable for any indirect, incidental, or consequential damages, even if advised of the possibility.`,
        []
      ),
      new PolicyContent(
        "INDEMNIFICATION",
        `You agree to defend, indemnify, and hold us harmless from any loss, damage, or claim arising from your use of the Services.`,
        []
      ),
      new PolicyContent(
        "USER DATA",
        `We maintain certain data transmitted to the Services for managing performance. You are solely responsible for all data you transmit.`,
        []
      ),
      new PolicyContent(
        "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
        `You consent to electronic communications and agree that electronic signatures and records satisfy any legal requirements.`,
        []
      ),
      new PolicyContent(
        "CALIFORNIA USERS AND RESIDENTS",
        `You may contact the California Department of Consumer Affairs at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834.`,
        []
      ),
      new PolicyContent(
        "MISCELLANEOUS",
        `These Legal Terms constitute the entire agreement between you and us. Any failure to enforce any right or provision of these terms shall not operate as a waiver of such right or provision.`,
        []
      ),
      new PolicyContent(
        "CONTACT US",
        "In order to resolve a complaint or to receive further information about the Services, please contact us at:",
        [
          new PolicySubContent(
            "hello@mypainterstape.com"
          )
        ]
      )
    ]
  );
}

export default Policy;
