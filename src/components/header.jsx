import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@cloudscape-design/components/modal';
import ProgressBar from '@cloudscape-design/components/progress-bar';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TopNavigation from '@cloudscape-design/components/top-navigation';

import { LoadSampleData } from '../utils/data-loader/loader';
import { getImagePath, ASSET_PATHS } from '../utils/image-utils';

export default function Header(props) {
  const { user, signOut } = { user: undefined, signOut: () => {} };
  const [visible, setVisible] = useState(false);
  const [loadDataVisible, setLoadDataVisible] = useState(false);
  const [categoryProgress, setCategoryProgress] = useState(0);
  const [categoryStatus, setCategoryStatus] = useState('in-progress');
  const [categoryResultText, setCategoryResultText] = useState('');
  const [productProgress, setProductProgress] = useState(0);
  const [productStatus, setProductStatus] = useState('in-progress');
  const [productResultText, setProductResultText] = useState('');
  const router = useRouter();
  const [modalRoot, setModalRoot] = useState(null)

  // Handle modal root after component mounts
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setModalRoot(document.getElementById('top-nav'));
    }
  }, []);

  useEffect(() => {
    if (user?.userId !== undefined) {
      setVisible(false);
    }
  }, [user]);

  const handleUserProfileAction = (event) => {
    if (event.detail.id === 'signout' && user !== undefined) {
      signOut();
    }
    else if (event.detail.id === 'signout' && user === undefined) {
      setVisible(true);
    }
  };

  const loadDataCallback = (statusUpdate) => {
    setCategoryProgress(statusUpdate.categoryProgress);
    setCategoryStatus(statusUpdate.categoryStatus);
    setCategoryResultText(statusUpdate.categoryResultText);
    setProductProgress(statusUpdate.productProgress);
    setProductStatus(statusUpdate.productStatus);
    setProductResultText(statusUpdate.productResultText);
  };

  async function loadSampleData(e) {
    e.preventDefault();
    setLoadDataVisible(true);
    LoadSampleData(loadDataCallback);
  };

  return (
    <div id="top-nav">
    <TopNavigation
      identity={{
        title: "RetailStore",
        href: "/",
        onFollow: function(e) {
          e.preventDefault();
          router.push('/');
        },
        logo: {
          src: getImagePath('amplifyLogo'),
          alt: 'Amplify RetailStore'
        }
      }}
      utilities={[
        {
          type: "menu-dropdown",
          iconName: 'settings',
          onItemClick: loadSampleData,
          items: [{
            id: "load-sample-data",
            text: "Load sample data"
          }]
        },
        {
          type: "menu-dropdown",
          text: (user && user.signInDetails) ? user.signInDetails?.loginId : "Profile",
          iconName: "user-profile",
          onItemClick: handleUserProfileAction,
          items: [
            { id: "signout", text: (user !== undefined) ? "Sign out" : "Sign in" }
          ]
        }
      ]}
      i18nStrings={{
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu"
      }}
    />
    <Modal
      onDismiss={() => setLoadDataVisible(false)}
      visible={loadDataVisible}
      closeAriaLabel="Close modal"
      header="Load sample data - status"
      modalRoot={modalRoot}
    >
      <SpaceBetween direction="vertical" size="m">
        <ProgressBar
          value={categoryProgress}
          status={categoryStatus}
          additionalInfo="Loading 20 categories for the RetailStore application"
          label="Category data load status"
          resultText={categoryResultText}
        />
        <ProgressBar
          value={productProgress}
          status={productStatus}
          additionalInfo="Loading a subset of sample products for the RetailStore application [max: 20 per category]"
          label="Product data load status"
          resultText={productResultText}
        />
      </SpaceBetween>
    </Modal>
    <Modal
      onDismiss={() => setVisible(false)}
      visible={visible}
      closeAriaLabel="Close modal"
      header="Please sign in or create an account"
      modalRoot={modalRoot}
    >

    </Modal>
  </div>
  );
}