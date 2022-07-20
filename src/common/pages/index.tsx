import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import config from '../config';
import {Alert} from '@hods/components';

const siteTitle = config.title;

export const title = 'Home';
const description = 'Our homepage';

const Page: FC<PageProps> = props => (
  <Fragment>
  	<Alert heading="Test passport">
  	We'll send your new passport by secure delivery. The
  	cost is included in the passport fee.
	</Alert>
    	<Alert
  	heading="Payment successful"
  	classModifiers="success">
  	We've sent details to test-email@test-corp.co.uk{" "}
  	<br />
  	<a href="#">Download confirmation</a>
	</Alert>
	<Alert
  	heading="Payment unsuccessful"
  	classModifiers="error">
  	Please try again or contact our{" "}
  	<a href="#">support team</a> for assistance.
	</Alert>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>{title}</h1>
    <p>This is the home page.</p>
  </Fragment>
);

export default Page;
