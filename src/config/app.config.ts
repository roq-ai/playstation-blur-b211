interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Administrator', 'Collection Manager'],
  tenantName: 'Company',
  applicationName: 'Playstation Bluray Collection',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View collection', 'View blu_ray', 'Purchase blu_ray', 'Update personal information'],
  ownerAbilities: [
    'Manage company information',
    'Manage user accounts',
    'Manage collections',
    'Manage blu-rays',
    'Manage owner records',
    'Manage customer records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6d877368-64da-4eb8-a492-b7ddcebe1300',
};
