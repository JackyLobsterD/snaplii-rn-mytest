import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import CopyRight from '../CopyRight';

const Terms = () => {
  return (
    <ScrollView style={styles.container}>
      {dataList.map((item, index) => {
        return (
          <View key={index}>
            {item.title && <Text style={styles.title}>{item.title}</Text>}

            <Text style={styles.content}>{item.content}</Text>
          </View>
        );
      })}
      <CopyRight />
    </ScrollView>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
    marginTop: 26,
    marginBottom: 0,
  },
  content: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
});

const dataList = [
  {
    title: '1. Introduction',
    content:
      'The use of Snaplii is subject to the following terms and conditions of use, as amended from time to time (the “Terms”). The Terms are to be read together by you with any terms, conditions or disclaimers provided in the pages of Snaplii. Please review the Terms carefully. The Terms apply to all users of Snaplii, including without limitation, users who are browsers, customers, merchants, vendors and/or contributors of content. If you access and use this application, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access Snaplii, use any of Snaplii’s services or place an order on the mobile wallet application.',
  },
  {
    title: '2. Use of Snaplii',
    content:
      'You agree to use Snaplii for legitimate purposes and not for any illegal or unauthorized purpose, including without limitation, in violation of any intellectual property or privacy law. By agreeing to the Terms, you represent and warrant that you are at least the age of majority in your state or province of residence and are legally capable of entering into a binding contract.You agree to not use Snaplii to conduct any activity that would constitute a civil or criminal offence or violate any law. You agree not to attempt to interfere with Snaplii’s network or security features or to gain unauthorized access to our systems.',
  },
  {
    title: '',
    content:
      'You agree to use Membership Cards and Coupons available in the mobile wallet application that grant you the benefits of redeeming balance, accessing special deals, and discounts offered by participant stores. Terms and Conditions apply to the use of the Membership Cards and Coupons, those Terms and Conditions that you can review on Snaplii.',
  },
  {
    title: '',
    content:
      'When you set up an account with Snaplii, you agree to provide us with accurate personal information, such as your phone number, name, E-mail address and other contact details in order to complete your purchase or contact you as needed. You agree to promptly update your account and information. You authorize us to collect and use this information to contact you in accordance with our Privacy Policy.',
  },
  {
    title: '3. General Conditions ',
    content:
      'Snaplii reserves the right to suspend or terminate your account and refuse any and all current or future use of Snaplii. We reserve the right to make any modifications to the mobile wallet application, including terminating, changing, suspending or discontinuing any aspect of the mobile wallet application at any time, without notice. Snaplii may impose additional rules or limits on the use of Snaplii. You agree to review the Terms regularly and your continued access or use of Snaplii will mean that you agree to any changes.You agree that Snaplii will not be liable to you or any third party for any modification, suspension or discontinuance of Snaplii or for any service, content, feature or product offered through Snaplii.',
  },
  {
    title: '4. Fees',
    content:
      'Fees charged for the use of Snaplii are subject to change, without notice. Unless otherwise indicated, prices displayed on Snaplii are quoted in Canadian dollars.We reserve the right, in our sole discretion, to refuse payment. If we believe that you have made a false or fraudulent payment, we will be entitled to cancel the order and inform the relevant authorities.',
  },
  {
    title: '5. Links to Third-Party Websites',
    content:
      'Links from or to application outside Snaplii are meant for convenience only. We do not review, endorse, approve or control, and are not responsible for any sites linked from or to Snaplii, the content of those sites, the third parties named therein, or their products and services. Linking to any other site is at your sole risk and we will not be responsible or liable for any damages in connection with linking. Links to downloadable software sites are for convenience only and we are not responsible or liable for any difficulties or consequences associated with downloading the software. Use of any downloaded software is governed by the terms of the license agreement, if any, which accompanies or is provided with the software.',
  },
  {
    title: '6. Use Comments, Feedback, and Other Submissions',
    content:
      'You acknowledge that you are responsible for the information, profiles, opinions, messages, comments and any other content (collectively, the “Content”) that you post, distribute or share on or through Snaplii or services available in connection with Snaplii. You further acknowledge that you have full responsibility for the Content, including but limited to, with respect to its legality, and its trademark, copyright and other intellectual property ownership.You agree that any Content submitted by you in response to a request by us for a specific submission may be edited, adapted, modified, recreated, published, or distributed by us. You further agree that we are under no obligation to maintain any Content in confidence, to pay compensation for any Content or to respond to any Content.',
  },
  {
    title: '',
    content:
      'You agree that you will not post, distribute or share any Content on Snaplii that is protected by copyright, trademark, patent or any other proprietary right without the express consent of the owner of such proprietary right. You further agree that your Content will not be unlawful, abusive or obscene nor will it contain any malware or computer virus that could affect Snaplii’s operations. You will be solely liable for any Content that you make and its accuracy. We have no responsibility and assume no liability for any Content posted by you or any third-party.We reserve the right to terminate your ability to post on Snaplii and to remove and/or delete any Content that we deem objectionable. You consent to such removal and/or deletion and waive any claim against us for the removal and/or deletion of your Content.',
  },
  {
    title: '7. Your Personal Information',
    content:
      'Please see our Privacy Policy to learn about how we collect, use, and share your personal information.',
  },
  {
    title: '8. Errors and Omissions',
    content:
      'Please note that Snaplii may contain typographical errors or inaccuracies and may not be complete or current. We reserve the right to correct any errors, inaccuracies or omissions and to change or update information at any time, without prior notice (including after an order has been submitted). Such errors, inaccuracies or omissions may relate to product description, pricing, promotion and availability and we reserve the right to cancel or refuse any order placed based on incorrect pricing or availability information, to the extent permitted by applicable law.We do not undertake to update, modify or clarify information on Snaplii, except as required by law.',
  },
  {
    title: '9. Disclaimer and Limitation of Liability',
    content:
      'You assume all responsibility and risk with respect to your use of Snaplii, which is provided “as is” without warranties, representations or conditions of any kind, either express or implied, with regard to information accessed from or via Snaplii, including without limitation, all content and materials, and functions and services provided on Snaplii, all of which are provided without warranty of any kind, including but not limited to warranties concerning the availability, accuracy, completeness or usefulness of content or information, uninterrupted access, and any warranties of title, non-infringement, merchantability or fitness for a particular purpose. We do not warrant that Snaplii or its functioning or the content and material of the services made available thereby will be timely, secure, uninterrupted or error-free, that defects will be corrected, or that Snaplii or the servers that make Snaplii available are free of viruses or other harmful components.The use of Snaplii is at your sole risk and you assume full responsibility for any costs associated with your use of Snaplii. We will not be liable for any damages of any kind related to the use of Snaplii.',
  },
  {
    title: '',
    content:
      'In no event will we, or our affiliates, our or their respective content or service providers, or any of our or their respective directors, officers, agents, contractors, suppliers or employees be liable to you for any direct, indirect, special, incidental, consequential, exemplary or punitive damages, losses or causes of action, or lost revenue, lost profits, lost business or sales, or any other type of damage, whether based in contract or tort (including negligence), strict liability or otherwise, arising from your use of, or the inability to use, or the performance of, Snaplii or the content or material or functionality through Snaplii, even if we are advised of the possibility of such damages.',
  },
  {
    title: '',
    content:
      'Certain jurisdictions do not allow limitation of liability or the exclusion or limitation of certain damages. In such jurisdictions, some or all of the above disclaimers, exclusions, or limitations, may not apply to you and our liability will be limited to the maximum extent permitted by law.',
  },
  {
    title: '10. Indemnification',
    content:
      'You agree to defend and indemnify us, and hold us and our affiliates harmless, and our and their respective directors, officers, agents, contractors, and employees against any losses, liabilities, claims, expenses (including legal fees) in any way arising from, related to or in connection with your use of Snaplii, your violation of the Terms, or the posting or transmission of any materials on or through the application by you, including but not limited to, any third party claim that any information or materials provided by you infringe upon any third party proprietary rights.',
  },
  {
    title: '11. Entire Agreement',
    content:
      'The Terms and any documents expressly referred to in them represent the entire agreement between you and us in relation to the subject matter of the Terms and supersede any prior agreement, understanding or arrangement between you and us, whether oral or in writing. Both you and we acknowledge that, in entering into these Terms, neither you nor we have relied on any representation, undertaking or promise given by the other or implied from anything said or written between you and us prior to such Terms, except as expressly stated in the Terms.',
  },
  {
    title: '12. Waiver',
    content:
      'Our failure to exercise or enforce any right or provision of the Terms will not constitute a waiver of such right or provision. A waiver by us of any default will not constitute a waiver of any subsequent default. No waiver by us is effective unless it is communicated to you in writing.',
  },
  {
    title: '13. Headings',
    content: 'Any headings and titles herein are for convenience only.',
  },
  {
    title: '14. Severability',
    content:
      'If any of the provisions of the Terms are determined by any competent authority to be invalid, unlawful or unenforceable, such provision will to that extent be severed from the remaining Terms, which will continue to be valid and enforceable to the fullest extent permitted by law.',
  },
  {
    title: '15. Governing Law',
    content:
      'Any disputes arising out of or relating to the Terms, the Privacy Policy, use of Snaplii, or our products or services offered on Snaplii will be resolved in accordance with the laws of the Province of Ontario without regard to its conflict of law rules. Any disputes, actions or proceedings relating to the Terms or your access to or use of Snaplii must be brought before the courts of the Province of Ontario and you irrevocably consent to the exclusive jurisdiction and venue of such courts.',
  },
  {
    title: '16. Questions or Concerns',
    content:
      'Please send all questions, comments and feedback to us at customerservice@snaplii.com.',
  },
];
