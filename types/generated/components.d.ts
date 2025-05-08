import type { Schema, Struct } from '@strapi/strapi';

export interface OpenAiApiChat extends Struct.ComponentSchema {
  collectionName: 'components_open_ai_api_chats';
  info: {
    displayName: 'Chat';
    icon: 'chartBubble';
  };
  attributes: {
    agent: Schema.Attribute.String;
    messages: Schema.Attribute.Component<'open-ai-api.message', true>;
    model: Schema.Attribute.String;
    settings: Schema.Attribute.JSON;
  };
}

export interface OpenAiApiMessage extends Struct.ComponentSchema {
  collectionName: 'components_open_ai_api_messages';
  info: {
    description: '';
    displayName: 'message';
    icon: 'message';
  };
  attributes: {
    content: Schema.Attribute.Text;
    role: Schema.Attribute.Enumeration<
      ['assistant', 'developer', 'tool', 'user', 'system', 'function']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'open-ai-api.chat': OpenAiApiChat;
      'open-ai-api.message': OpenAiApiMessage;
    }
  }
}
