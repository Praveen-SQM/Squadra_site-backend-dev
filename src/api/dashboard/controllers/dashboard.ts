/**
 * dashboard controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::dashboard.dashboard', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        hero_section: '*',
        customer_journey: {
          populate: ['journey_cards'], 
        },
        dashboard_team_section: '*',
        dashboard_contact_section: '*',
        footer:"*",
      },
    };

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    ctx.query = {
      ...ctx.query,
      populate: {
        hero_section: '*',
        customer_journey: {
          populate: ['journey_cards'], 
        },
        dashboard_team_section: '*',
        dashboard_contact_section: '*',
                footer:"*",
      },
    };

    const { data } = await super.findOne(ctx);

    return { data };
  },
}));
