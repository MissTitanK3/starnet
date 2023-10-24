import Link from 'next/link';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <div
      style={{
        width: '80%',
        height: '85vh',
        margin: 'auto',
        overflowX: 'auto',
      }}>
      <div className="terms-of-service">
        <h1>Terms of Service for StarNet</h1>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using StarNet, you agree to be bound by these Terms of Service. If you do not agree with any
          part of these terms, please do not access or use our application.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms of Service at any time, and by using the application
          after any changes are implemented, you agree to the changes.
        </p>

        <h2>3. Registration</h2>
        <p>
          To use certain features of the application, you may be required to register. You agree to provide accurate and
          current information and to keep this information updated.
        </p>

        <h2>4. Privacy Policy</h2>
        <p>Your use of StarNet is also governed by our Privacy Policy, which can be found below</p>

        <h2>5. Restrictions on Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the application for any illegal purpose.</li>
          <li>Attempt to gain unauthorized access to any part of the application.</li>
          <li>Use the application in any way that may damage or overburden our servers or networks.</li>
        </ul>

        <h2>6. CLASS ACTION WAIVER</h2>
        <p>
          YOU AND StarNet AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND
          NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION OR PROCEEDING. UNLESS BOTH
          YOU AND StarNet AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE PERSON&apos;S OR
          PARTY&apos;S CLAIMS, AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A CONSOLIDATED, REPRESENTATIVE, OR CLASS
          PROCEEDING. ALSO, THE ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF)
          ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF
          NECESSITATED BY THAT PARTY&apos;S INDIVIDUAL CLAIM(S). ANY RELIEF AWARDED CANNOT AFFECT OTHER StarNet USERS.
        </p>

        <h2>7. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the application at our discretion, without notice,
          for conduct that we believe violates these terms or is harmful to other users of the application, us, or third
          parties.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          StarNet is provided &quote;as is&quote; without any warranties of any kind, either express or implied,
          including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or
          non-infringement.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          In no event shall we be liable for any damages whatsoever, including direct, indirect, incidental,
          consequential, or punitive damages, arising out of the use of or inability to use StarNet.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms of Service and any dispute arising out of your use of StarNet will be governed by and construed in
          accordance with the laws of the State of Arkansas, without regard to its conflict of law provisions.
        </p>

        <h2>11. Contact</h2>
        <p>For any questions regarding these Terms of Service, please contact us at [Your Contact Information].</p>
      </div>
      <div className="privacy-policy">
        <h1>Privacy Policy for StarNet</h1>

        <h2>1. Introduction</h2>
        <p>
          At StarNet, we respect your privacy and are committed to protecting it. This Privacy Policy explains how we
          collect, use, and safeguard your personal information when you use our application, StarNet.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li>
            <strong>Automatically Collected Data:</strong> When you use our application, we may automatically collect
            certain information such as your IP address, device type, operating system, and usage statistics.
          </li>
          <li>
            <strong>User-Provided Data:</strong> We collect information that you voluntarily provide when registering or
            using our application, such as your name, email address, and other relevant details.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect:</p>
        <ul>
          <li>To provide and maintain our application.</li>
          <li>To improve user experience.</li>
          <li>For customer support and communication.</li>
          <li>For marketing and promotional purposes, with your consent.</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance user experience and gather information about the
          usage of our application.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          We may share your information with third-party service providers that assist us in our operations, but only as
          necessary. We ensure that all third parties respect the privacy of your information and use it for specific
          purposes.
        </p>

        <h2>6. Security</h2>
        <p>
          We take precautions, including administrative, technical, and physical measures, to safeguard your information
          against loss, theft, misuse, unauthorized access, and disclosure.
        </p>

        <h2>7. User Rights</h2>
        <p>
          Depending on where you reside, you may have the right to access, modify, or delete your personal data. You can
          contact us at <Link href="https://discord.gg/PV3yeCXwMb">https://discord.gg/PV3yeCXwMb</Link> to exercise
          these rights.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and if
          significant changes are made, we will notify our users.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For questions or concerns about this Privacy Policy or your data, please contact us at{' '}
          <Link href="https://discord.gg/PV3yeCXwMb">https://discord.gg/PV3yeCXwMb</Link>.
        </p>
      </div>
    </div>
  );
};

export default Page;
