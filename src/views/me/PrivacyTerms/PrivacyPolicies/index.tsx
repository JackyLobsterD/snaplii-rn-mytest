import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import CopyRight from '../CopyRight';

const PrivacyPolicies = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.content}>
        This Snaplii Privacy Policy is effective as of January 1, 2021. Snaplii
        is committed to maintaining the accuracy, confidentiality, and security
        of your personally identifiable information (“Personal Information”). As
        part of this commitment, our privacy policy governs our actions as they
        relate to the collection, use and disclosure of Personal Information.
        The privacy policy of Snaplii is based upon the values set by the
        Canadian Standards Association’s Model Code for the Protection of
        Personal Information and Canada’s Personal Information Protection and
        Electronic Documents Act.
      </Text>
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

export default PrivacyPolicies;

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
      'Snaplii is responsible for maintaining and protecting the Personal Information under our control. Snaplii has designated an individual or individuals who is/are responsible for compliance with our privacy policy.',
  },
  {
    title: '2. Use of Snaplii',
    content:
      'Snaplii collects, uses and discloses Personal Information to provide you with the product or service you have requested and to offer you additional products and services we believe you might be interested in. The purposes for which Snaplii collects Personal Information will be identified before or at the time Snaplii collects the information. In certain circumstances, the purposes for which information is collected may be clear, and consent may be implied, such as where your name, address and payment information is provided as part of the order process.',
  },
  {
    title: '3. General Conditions ',
    content:
      'Knowledge and consent are required for the collection, use or disclosure of Personal Information except where required or permitted by law. Providing Snaplii with your Personal Information is always your choice. However, your decision not to provide certain information may limit our ability to provide you with our products or services. Snaplii will not require you to consent to the collection, use, or disclosure of information as a condition to the supply of a product or service, except as required to be able to supply the product or service.',
  },
  {
    title: '4. Fees',
    content:
      'The Personal Information collected will be limited to those details necessary for the purposes identified by Snaplii. With your consent, we may collect Personal Information from you via the mobile wallet application Snaplii, in person, over the telephone or by corresponding with you via mail, facsimile, or the Internet.Snaplii does not collect, process, or use any information relating to an individual under 18 years of age without the prior consent of the child’s parent or legal guardian.',
  },
  {
    title: '',
    content:
      'Snaplii does not intend its app or website for children, and has no intention of collecting personal information from children under 18 years of age. If you discover that your child has provided Snaplii with personal information, Snaplii asks that you contact Snaplii to have this information deleted from its record.',
  },
  {
    title: '5. Limiting Use, Disclosure and Retention',
    content:
      'Personal Information may only be used or disclosed for the purpose for which it was collected unless you have otherwise consented, or when it is required or permitted by law.Snaplii makes reasonable efforts to prevent unauthorized use, sharing, loss and theft of information. Snaplii regularly audits the security measures and assess that they remain effective and appropriate. Our employees who have access to your information are made aware of the importance of keeping it confidential. Information may be shared with or accessed by our service providers, so that they can perform services on our behalf. Snaplii is careful when selecting the service providers and requires them to have privacy and security standards that meet Snaplii’s requirements. Snaplii uses contracts and other measures with the service providers to maintain the confidentiality and security of your information and to prevent it from being used for any other purpose other than that for which it was intended.',
  },
  {
    title: '',
    content:
      'The length of time Snaplii keeps your information will vary depending on the product or service and the type of information Snaplii has. Snaplii keeps your information for as long as Snaplii reasonably needs it for customer service, legal or reasonable business purposes. When your information is no longer required, Snaplii securely destroys it or deletes personally identifiable information. Depending on the nature of the information, your information may be stored in Snaplii office, in various computer systems or in the record storage facilities of Snaplii or our service providers.',
  },
  {
    title: '',
    content:
      'Information may be stored and processed in any country where Snaplii have service providers. By using products or services of Snaplii, you consent to the transfer of information to countries outside of Canada — including the United States — which may provide different data protection rules. Snaplii, service providers and other third parties, with whom Snaplii shares information under this policy, may perform activities outside of Canada. As a result, your information may be securely used, stored or accessed in other countries and be subject to the laws of those countries.',
  },
  {
    title: '6. Accuracy',
    content:
      'Personal Information will be maintained in as accurate, complete and up-to-date form as is necessary to fulfill the purposes for which it is to be used.',
  },
  {
    title: '7. Safeguarding Customer Information',
    content:
      'Personal Information will be protected by security safeguards that are appropriate to the sensitivity level of the information. Snaplii takes all reasonable precautions to protect your Personal Information from any loss or unauthorized use, access or disclosure.',
  },
  {
    title: '8. Openness',
    content:
      'Snaplii will make information available to you about our policies and practices with respect to the management of your Personal Information.',
  },
  {
    title: '9. Customer Access',
    content:
      'Upon request, you will be informed of the existence, use and disclosure of your Personal Information, and will be given access to it. You may verify the accuracy and completeness of your Personal Information, and may request that it be amended, if appropriate. However, in certain circumstances permitted by law, we will not disclose certain information to you. For example, we may not disclose information relating to you if other individuals are referenced or if there are legal, security or commercial proprietary restrictions.',
  },
  {
    title: '10. Handling Customer Complaints and Suggestions',
    content:
      'You may direct any questions or enquiries with respect to our privacy policy or our practices by contacting:',
  },
  {
    title: '',
    content: 'customerservice@snaplii.com',
  },
];
