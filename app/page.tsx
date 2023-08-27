import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

// export const dynamicParams = true;
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Starnet',
  description: 'Welcome to Starnet!',
};

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (data.session?.provider_token) {
    return redirect('/home');
  }
  return (
    <main
      style={{
        maxWidth: '70dvw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
      }}>
      <h1>Welcome to Starnet!</h1>
      <br />
      <p>
        We are a secondary community network where everyone here has agreed to conduct themsleves with a minimum level
        of civility. While there will be some dedicated members who will operate the network, for the most part members
        of this network will have a primary organization that isnt FCFN. And those are the people that will be
        representatives of their organization. We do have a rank structure, and you can be promoted based on activity
        and proof of understanding.
      </p>
      <br />
      <p>
        We use discord as auth because that ensures that, at a minimum, you are not a lazy troll, instead you are a
        dedicated troll. And those are easier to deal with.
      </p>
      <br />
      <p>
        This is a project is in active development. Features may be added, removed, or changed at any time. If you have
        any questions, comments, or concerns, please contact us on discord. We are always looking for feedback.
        Additionally you can view the full disclaimer by clicking the button under Sign in with Discord.
      </p>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <h3>Product in Active Development Status</h3>
        <br />
        <ul
          style={{
            maxWidth: '70dvw',
          }}>
          <li>
            Unfinished Product: Being in active development means this product is not finalized and may lack certain
            features, functionalities or stability that you might expect from a complete product.
          </li>
          <li>
            Frequent Updates: You may experience frequent updates which could include significant changes or addition of
            features. Some of these updates may require reconfiguration or reinstallation.
          </li>
          <li>
            Potential Bugs: As with any product in development, there is the possibility of encountering bugs, glitches,
            or other issues that could impact performance and usability.
          </li>
          <li>
            Data Loss and Compatibility: There is a risk of data loss or compatibility issues with each new update. We
            highly recommend keeping backups of your data and not relying on this product for critical tasks or data.
          </li>
          <li>
            Limited Support: While we strive to provide customer support, our resources may be limited during the
            development phase. Response times may be slower than for a finished product.
          </li>
          <li>
            Feedback and Reporting: We encourage users to report any issues or provide feedback, as it is invaluable for
            the improvement of the product. However, we cannot guarantee that all suggestions will be implemented.
          </li>
          <li>
            No Warranties: This product is provided “as-is” without any warranties of any kind, either express or
            implied, including but not limited to the implied warranties of merchantability, fitness for a particular
            purpose, or non-infringement.
          </li>
          <li>
            Limitation of Liability: In no event shall the developers or associated parties be liable for any direct,
            indirect, special, punitive, incidental or consequential damages (including, without limitation, damages for
            loss of business profits, business interruption, or loss of business information) arising out of the use of
            or inability to use this product.
          </li>
        </ul>
      </div>
      <br />
      <p>
        By using this product, you acknowledge and agree to the above statements, and understand the inherent risks and
        limitations associated with a product in active development. You accept full responsibility for any consequences
        that may arise from using this product in its current state.
      </p>
    </main>
  );
}
