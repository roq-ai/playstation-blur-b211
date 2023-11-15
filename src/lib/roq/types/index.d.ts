/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model blu_ray
 *
 */
export type blu_ray = $Result.DefaultSelection<Prisma.$blu_rayPayload>;
/**
 * Model collection
 *
 */
export type collection = $Result.DefaultSelection<Prisma.$collectionPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model customer
 *
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>;
/**
 * Model owner
 *
 */
export type owner = $Result.DefaultSelection<Prisma.$ownerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Blu_rays
 * const blu_rays = await prisma.blu_ray.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Blu_rays
   * const blu_rays = await prisma.blu_ray.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.blu_ray`: Exposes CRUD operations for the **blu_ray** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Blu_rays
   * const blu_rays = await prisma.blu_ray.findMany()
   * ```
   */
  get blu_ray(): Prisma.blu_rayDelegate<ExtArgs>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **collection** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Collections
   * const collections = await prisma.collection.findMany()
   * ```
   */
  get collection(): Prisma.collectionDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   */
  get owner(): Prisma.ownerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    blu_ray: 'blu_ray';
    collection: 'collection';
    company: 'company';
    customer: 'customer';
    owner: 'owner';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'blu_ray' | 'collection' | 'company' | 'customer' | 'owner' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      blu_ray: {
        payload: Prisma.$blu_rayPayload<ExtArgs>;
        fields: Prisma.blu_rayFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.blu_rayFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.blu_rayFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload>;
          };
          findFirst: {
            args: Prisma.blu_rayFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.blu_rayFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload>;
          };
          findMany: {
            args: Prisma.blu_rayFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload>[];
          };
          create: {
            args: Prisma.blu_rayCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload>;
          };
          createMany: {
            args: Prisma.blu_rayCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.blu_rayDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload>;
          };
          update: {
            args: Prisma.blu_rayUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload>;
          };
          deleteMany: {
            args: Prisma.blu_rayDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.blu_rayUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.blu_rayUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$blu_rayPayload>;
          };
          aggregate: {
            args: Prisma.Blu_rayAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBlu_ray>;
          };
          groupBy: {
            args: Prisma.blu_rayGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Blu_rayGroupByOutputType>[];
          };
          count: {
            args: Prisma.blu_rayCountArgs<ExtArgs>;
            result: $Utils.Optional<Blu_rayCountAggregateOutputType> | number;
          };
        };
      };
      collection: {
        payload: Prisma.$collectionPayload<ExtArgs>;
        fields: Prisma.collectionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.collectionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.collectionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          findFirst: {
            args: Prisma.collectionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.collectionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          findMany: {
            args: Prisma.collectionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>[];
          };
          create: {
            args: Prisma.collectionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          createMany: {
            args: Prisma.collectionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.collectionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          update: {
            args: Prisma.collectionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          deleteMany: {
            args: Prisma.collectionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.collectionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.collectionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCollection>;
          };
          groupBy: {
            args: Prisma.collectionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CollectionGroupByOutputType>[];
          };
          count: {
            args: Prisma.collectionCountArgs<ExtArgs>;
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>;
        fields: Prisma.customerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[];
          };
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.customerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      owner: {
        payload: Prisma.$ownerPayload<ExtArgs>;
        fields: Prisma.ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findFirst: {
            args: Prisma.ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          findMany: {
            args: Prisma.ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>[];
          };
          create: {
            args: Prisma.ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          createMany: {
            args: Prisma.ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          update: {
            args: Prisma.ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          deleteMany: {
            args: Prisma.ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ownerPayload>;
          };
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOwner>;
          };
          groupBy: {
            args: Prisma.ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OwnerGroupByOutputType>[];
          };
          count: {
            args: Prisma.ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type Blu_rayCountOutputType
   */

  export type Blu_rayCountOutputType = {
    customer: number;
    owner: number;
  };

  export type Blu_rayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Blu_rayCountOutputTypeCountCustomerArgs;
    owner?: boolean | Blu_rayCountOutputTypeCountOwnerArgs;
  };

  // Custom InputTypes

  /**
   * Blu_rayCountOutputType without action
   */
  export type Blu_rayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blu_rayCountOutputType
     */
    select?: Blu_rayCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Blu_rayCountOutputType without action
   */
  export type Blu_rayCountOutputTypeCountCustomerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: customerWhereInput;
  };

  /**
   * Blu_rayCountOutputType without action
   */
  export type Blu_rayCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: ownerWhereInput;
    };

  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    blu_ray: number;
  };

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blu_ray?: boolean | CollectionCountOutputTypeCountBlu_rayArgs;
  };

  // Custom InputTypes

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the CollectionCountOutputType
       */
      select?: CollectionCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountBlu_rayArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: blu_rayWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    user: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CompanyCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    collection: number;
    customer: number;
    owner: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UserCountOutputTypeCountCollectionArgs;
    customer?: boolean | UserCountOutputTypeCountCustomerArgs;
    owner?: boolean | UserCountOutputTypeCountOwnerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: collectionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: customerWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model blu_ray
   */

  export type AggregateBlu_ray = {
    _count: Blu_rayCountAggregateOutputType | null;
    _avg: Blu_rayAvgAggregateOutputType | null;
    _sum: Blu_raySumAggregateOutputType | null;
    _min: Blu_rayMinAggregateOutputType | null;
    _max: Blu_rayMaxAggregateOutputType | null;
  };

  export type Blu_rayAvgAggregateOutputType = {
    rating: number | null;
  };

  export type Blu_raySumAggregateOutputType = {
    rating: number | null;
  };

  export type Blu_rayMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    release_date: Date | null;
    rating: number | null;
    collection_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Blu_rayMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    release_date: Date | null;
    rating: number | null;
    collection_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Blu_rayCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    release_date: number;
    rating: number;
    collection_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Blu_rayAvgAggregateInputType = {
    rating?: true;
  };

  export type Blu_raySumAggregateInputType = {
    rating?: true;
  };

  export type Blu_rayMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    release_date?: true;
    rating?: true;
    collection_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Blu_rayMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    release_date?: true;
    rating?: true;
    collection_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Blu_rayCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    release_date?: true;
    rating?: true;
    collection_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Blu_rayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blu_ray to aggregate.
     */
    where?: blu_rayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blu_rays to fetch.
     */
    orderBy?: blu_rayOrderByWithRelationInput | blu_rayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: blu_rayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blu_rays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blu_rays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned blu_rays
     **/
    _count?: true | Blu_rayCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Blu_rayAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Blu_raySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Blu_rayMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Blu_rayMaxAggregateInputType;
  };

  export type GetBlu_rayAggregateType<T extends Blu_rayAggregateArgs> = {
    [P in keyof T & keyof AggregateBlu_ray]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlu_ray[P]>
      : GetScalarType<T[P], AggregateBlu_ray[P]>;
  };

  export type blu_rayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blu_rayWhereInput;
    orderBy?: blu_rayOrderByWithAggregationInput | blu_rayOrderByWithAggregationInput[];
    by: Blu_rayScalarFieldEnum[] | Blu_rayScalarFieldEnum;
    having?: blu_rayScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Blu_rayCountAggregateInputType | true;
    _avg?: Blu_rayAvgAggregateInputType;
    _sum?: Blu_raySumAggregateInputType;
    _min?: Blu_rayMinAggregateInputType;
    _max?: Blu_rayMaxAggregateInputType;
  };

  export type Blu_rayGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    release_date: Date | null;
    rating: number | null;
    collection_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Blu_rayCountAggregateOutputType | null;
    _avg: Blu_rayAvgAggregateOutputType | null;
    _sum: Blu_raySumAggregateOutputType | null;
    _min: Blu_rayMinAggregateOutputType | null;
    _max: Blu_rayMaxAggregateOutputType | null;
  };

  type GetBlu_rayGroupByPayload<T extends blu_rayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blu_rayGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Blu_rayGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Blu_rayGroupByOutputType[P]>
          : GetScalarType<T[P], Blu_rayGroupByOutputType[P]>;
      }
    >
  >;

  export type blu_raySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      release_date?: boolean;
      rating?: boolean;
      collection_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      collection?: boolean | collectionDefaultArgs<ExtArgs>;
      customer?: boolean | blu_ray$customerArgs<ExtArgs>;
      owner?: boolean | blu_ray$ownerArgs<ExtArgs>;
      _count?: boolean | Blu_rayCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['blu_ray']
  >;

  export type blu_raySelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    release_date?: boolean;
    rating?: boolean;
    collection_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type blu_rayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | collectionDefaultArgs<ExtArgs>;
    customer?: boolean | blu_ray$customerArgs<ExtArgs>;
    owner?: boolean | blu_ray$ownerArgs<ExtArgs>;
    _count?: boolean | Blu_rayCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $blu_rayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'blu_ray';
    objects: {
      collection: Prisma.$collectionPayload<ExtArgs>;
      customer: Prisma.$customerPayload<ExtArgs>[];
      owner: Prisma.$ownerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        release_date: Date | null;
        rating: number | null;
        collection_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['blu_ray']
    >;
    composites: {};
  };

  type blu_rayGetPayload<S extends boolean | null | undefined | blu_rayDefaultArgs> = $Result.GetResult<
    Prisma.$blu_rayPayload,
    S
  >;

  type blu_rayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    blu_rayFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Blu_rayCountAggregateInputType | true;
  };

  export interface blu_rayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blu_ray']; meta: { name: 'blu_ray' } };
    /**
     * Find zero or one Blu_ray that matches the filter.
     * @param {blu_rayFindUniqueArgs} args - Arguments to find a Blu_ray
     * @example
     * // Get one Blu_ray
     * const blu_ray = await prisma.blu_ray.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends blu_rayFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, blu_rayFindUniqueArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Blu_ray that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {blu_rayFindUniqueOrThrowArgs} args - Arguments to find a Blu_ray
     * @example
     * // Get one Blu_ray
     * const blu_ray = await prisma.blu_ray.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends blu_rayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blu_rayFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<
      $Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Blu_ray that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blu_rayFindFirstArgs} args - Arguments to find a Blu_ray
     * @example
     * // Get one Blu_ray
     * const blu_ray = await prisma.blu_ray.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends blu_rayFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, blu_rayFindFirstArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Blu_ray that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blu_rayFindFirstOrThrowArgs} args - Arguments to find a Blu_ray
     * @example
     * // Get one Blu_ray
     * const blu_ray = await prisma.blu_ray.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends blu_rayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blu_rayFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Blu_rays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blu_rayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blu_rays
     * const blu_rays = await prisma.blu_ray.findMany()
     *
     * // Get first 10 Blu_rays
     * const blu_rays = await prisma.blu_ray.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const blu_rayWithIdOnly = await prisma.blu_ray.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends blu_rayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blu_rayFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Blu_ray.
     * @param {blu_rayCreateArgs} args - Arguments to create a Blu_ray.
     * @example
     * // Create one Blu_ray
     * const Blu_ray = await prisma.blu_ray.create({
     *   data: {
     *     // ... data to create a Blu_ray
     *   }
     * })
     *
     **/
    create<T extends blu_rayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, blu_rayCreateArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Blu_rays.
     *     @param {blu_rayCreateManyArgs} args - Arguments to create many Blu_rays.
     *     @example
     *     // Create many Blu_rays
     *     const blu_ray = await prisma.blu_ray.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends blu_rayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blu_rayCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Blu_ray.
     * @param {blu_rayDeleteArgs} args - Arguments to delete one Blu_ray.
     * @example
     * // Delete one Blu_ray
     * const Blu_ray = await prisma.blu_ray.delete({
     *   where: {
     *     // ... filter to delete one Blu_ray
     *   }
     * })
     *
     **/
    delete<T extends blu_rayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, blu_rayDeleteArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Blu_ray.
     * @param {blu_rayUpdateArgs} args - Arguments to update one Blu_ray.
     * @example
     * // Update one Blu_ray
     * const blu_ray = await prisma.blu_ray.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends blu_rayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, blu_rayUpdateArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Blu_rays.
     * @param {blu_rayDeleteManyArgs} args - Arguments to filter Blu_rays to delete.
     * @example
     * // Delete a few Blu_rays
     * const { count } = await prisma.blu_ray.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends blu_rayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blu_rayDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Blu_rays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blu_rayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blu_rays
     * const blu_ray = await prisma.blu_ray.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends blu_rayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, blu_rayUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Blu_ray.
     * @param {blu_rayUpsertArgs} args - Arguments to update or create a Blu_ray.
     * @example
     * // Update or create a Blu_ray
     * const blu_ray = await prisma.blu_ray.upsert({
     *   create: {
     *     // ... data to create a Blu_ray
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blu_ray we want to update
     *   }
     * })
     **/
    upsert<T extends blu_rayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, blu_rayUpsertArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Blu_rays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blu_rayCountArgs} args - Arguments to filter Blu_rays to count.
     * @example
     * // Count the number of Blu_rays
     * const count = await prisma.blu_ray.count({
     *   where: {
     *     // ... the filter for the Blu_rays we want to count
     *   }
     * })
     **/
    count<T extends blu_rayCountArgs>(
      args?: Subset<T, blu_rayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blu_rayCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Blu_ray.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blu_rayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Blu_rayAggregateArgs>(
      args: Subset<T, Blu_rayAggregateArgs>,
    ): Prisma.PrismaPromise<GetBlu_rayAggregateType<T>>;

    /**
     * Group by Blu_ray.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blu_rayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends blu_rayGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blu_rayGroupByArgs['orderBy'] }
        : { orderBy?: blu_rayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, blu_rayGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBlu_rayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the blu_ray model
     */
    readonly fields: blu_rayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blu_ray.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blu_rayClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collection<T extends collectionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, collectionDefaultArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    customer<T extends blu_ray$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, blu_ray$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends blu_ray$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, blu_ray$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the blu_ray model
   */
  interface blu_rayFieldRefs {
    readonly id: FieldRef<'blu_ray', 'String'>;
    readonly title: FieldRef<'blu_ray', 'String'>;
    readonly description: FieldRef<'blu_ray', 'String'>;
    readonly release_date: FieldRef<'blu_ray', 'DateTime'>;
    readonly rating: FieldRef<'blu_ray', 'Int'>;
    readonly collection_id: FieldRef<'blu_ray', 'String'>;
    readonly created_at: FieldRef<'blu_ray', 'DateTime'>;
    readonly updated_at: FieldRef<'blu_ray', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * blu_ray findUnique
   */
  export type blu_rayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * Filter, which blu_ray to fetch.
     */
    where: blu_rayWhereUniqueInput;
  };

  /**
   * blu_ray findUniqueOrThrow
   */
  export type blu_rayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * Filter, which blu_ray to fetch.
     */
    where: blu_rayWhereUniqueInput;
  };

  /**
   * blu_ray findFirst
   */
  export type blu_rayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * Filter, which blu_ray to fetch.
     */
    where?: blu_rayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blu_rays to fetch.
     */
    orderBy?: blu_rayOrderByWithRelationInput | blu_rayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for blu_rays.
     */
    cursor?: blu_rayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blu_rays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blu_rays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of blu_rays.
     */
    distinct?: Blu_rayScalarFieldEnum | Blu_rayScalarFieldEnum[];
  };

  /**
   * blu_ray findFirstOrThrow
   */
  export type blu_rayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * Filter, which blu_ray to fetch.
     */
    where?: blu_rayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blu_rays to fetch.
     */
    orderBy?: blu_rayOrderByWithRelationInput | blu_rayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for blu_rays.
     */
    cursor?: blu_rayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blu_rays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blu_rays.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of blu_rays.
     */
    distinct?: Blu_rayScalarFieldEnum | Blu_rayScalarFieldEnum[];
  };

  /**
   * blu_ray findMany
   */
  export type blu_rayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * Filter, which blu_rays to fetch.
     */
    where?: blu_rayWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blu_rays to fetch.
     */
    orderBy?: blu_rayOrderByWithRelationInput | blu_rayOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing blu_rays.
     */
    cursor?: blu_rayWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blu_rays from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blu_rays.
     */
    skip?: number;
    distinct?: Blu_rayScalarFieldEnum | Blu_rayScalarFieldEnum[];
  };

  /**
   * blu_ray create
   */
  export type blu_rayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * The data needed to create a blu_ray.
     */
    data: XOR<blu_rayCreateInput, blu_rayUncheckedCreateInput>;
  };

  /**
   * blu_ray createMany
   */
  export type blu_rayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blu_rays.
     */
    data: blu_rayCreateManyInput | blu_rayCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * blu_ray update
   */
  export type blu_rayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * The data needed to update a blu_ray.
     */
    data: XOR<blu_rayUpdateInput, blu_rayUncheckedUpdateInput>;
    /**
     * Choose, which blu_ray to update.
     */
    where: blu_rayWhereUniqueInput;
  };

  /**
   * blu_ray updateMany
   */
  export type blu_rayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blu_rays.
     */
    data: XOR<blu_rayUpdateManyMutationInput, blu_rayUncheckedUpdateManyInput>;
    /**
     * Filter which blu_rays to update
     */
    where?: blu_rayWhereInput;
  };

  /**
   * blu_ray upsert
   */
  export type blu_rayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * The filter to search for the blu_ray to update in case it exists.
     */
    where: blu_rayWhereUniqueInput;
    /**
     * In case the blu_ray found by the `where` argument doesn't exist, create a new blu_ray with this data.
     */
    create: XOR<blu_rayCreateInput, blu_rayUncheckedCreateInput>;
    /**
     * In case the blu_ray was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blu_rayUpdateInput, blu_rayUncheckedUpdateInput>;
  };

  /**
   * blu_ray delete
   */
  export type blu_rayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    /**
     * Filter which blu_ray to delete.
     */
    where: blu_rayWhereUniqueInput;
  };

  /**
   * blu_ray deleteMany
   */
  export type blu_rayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blu_rays to delete
     */
    where?: blu_rayWhereInput;
  };

  /**
   * blu_ray.customer
   */
  export type blu_ray$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * blu_ray.owner
   */
  export type blu_ray$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * blu_ray without action
   */
  export type blu_rayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
  };

  /**
   * Model collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null;
    _avg: CollectionAvgAggregateOutputType | null;
    _sum: CollectionSumAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  export type CollectionAvgAggregateOutputType = {
    rating: number | null;
  };

  export type CollectionSumAggregateOutputType = {
    rating: number | null;
  };

  export type CollectionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    release_date: Date | null;
    rating: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CollectionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    release_date: Date | null;
    rating: number | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CollectionCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    release_date: number;
    rating: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CollectionAvgAggregateInputType = {
    rating?: true;
  };

  export type CollectionSumAggregateInputType = {
    rating?: true;
  };

  export type CollectionMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    release_date?: true;
    rating?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CollectionMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    release_date?: true;
    rating?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CollectionCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    release_date?: true;
    rating?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collection to aggregate.
     */
    where?: collectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: collectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned collections
     **/
    _count?: true | CollectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CollectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CollectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CollectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CollectionMaxAggregateInputType;
  };

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
    [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>;
  };

  export type collectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collectionWhereInput;
    orderBy?: collectionOrderByWithAggregationInput | collectionOrderByWithAggregationInput[];
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum;
    having?: collectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollectionCountAggregateInputType | true;
    _avg?: CollectionAvgAggregateInputType;
    _sum?: CollectionSumAggregateInputType;
    _min?: CollectionMinAggregateInputType;
    _max?: CollectionMaxAggregateInputType;
  };

  export type CollectionGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    release_date: Date | null;
    rating: number | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CollectionCountAggregateOutputType | null;
    _avg: CollectionAvgAggregateOutputType | null;
    _sum: CollectionSumAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  type GetCollectionGroupByPayload<T extends collectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CollectionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
          : GetScalarType<T[P], CollectionGroupByOutputType[P]>;
      }
    >
  >;

  export type collectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        release_date?: boolean;
        rating?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        blu_ray?: boolean | collection$blu_rayArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['collection']
    >;

  export type collectionSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    release_date?: boolean;
    rating?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type collectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blu_ray?: boolean | collection$blu_rayArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $collectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'collection';
    objects: {
      blu_ray: Prisma.$blu_rayPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        release_date: Date | null;
        rating: number | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['collection']
    >;
    composites: {};
  };

  type collectionGetPayload<S extends boolean | null | undefined | collectionDefaultArgs> = $Result.GetResult<
    Prisma.$collectionPayload,
    S
  >;

  type collectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    collectionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CollectionCountAggregateInputType | true;
  };

  export interface collectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collection']; meta: { name: 'collection' } };
    /**
     * Find zero or one Collection that matches the filter.
     * @param {collectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends collectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, collectionFindUniqueArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Collection that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {collectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends collectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends collectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionFindFirstArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends collectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     *
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends collectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Collection.
     * @param {collectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     *
     **/
    create<T extends collectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, collectionCreateArgs<ExtArgs>>,
    ): Prisma__collectionClient<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Collections.
     *     @param {collectionCreateManyArgs} args - Arguments to create many Collections.
     *     @example
     *     // Create many Collections
     *     const collection = await prisma.collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends collectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Collection.
     * @param {collectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     *
     **/
    delete<T extends collectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, collectionDeleteArgs<ExtArgs>>,
    ): Prisma__collectionClient<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Collection.
     * @param {collectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends collectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, collectionUpdateArgs<ExtArgs>>,
    ): Prisma__collectionClient<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Collections.
     * @param {collectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends collectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends collectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, collectionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Collection.
     * @param {collectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     **/
    upsert<T extends collectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, collectionUpsertArgs<ExtArgs>>,
    ): Prisma__collectionClient<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
     **/
    count<T extends collectionCountArgs>(
      args?: Subset<T, collectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CollectionAggregateArgs>(
      args: Subset<T, CollectionAggregateArgs>,
    ): Prisma.PrismaPromise<GetCollectionAggregateType<T>>;

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends collectionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collectionGroupByArgs['orderBy'] }
        : { orderBy?: collectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, collectionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the collection model
     */
    readonly fields: collectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collectionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blu_ray<T extends collection$blu_rayArgs<ExtArgs> = {}>(
      args?: Subset<T, collection$blu_rayArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the collection model
   */
  interface collectionFieldRefs {
    readonly id: FieldRef<'collection', 'String'>;
    readonly name: FieldRef<'collection', 'String'>;
    readonly description: FieldRef<'collection', 'String'>;
    readonly release_date: FieldRef<'collection', 'DateTime'>;
    readonly rating: FieldRef<'collection', 'Int'>;
    readonly user_id: FieldRef<'collection', 'String'>;
    readonly created_at: FieldRef<'collection', 'DateTime'>;
    readonly updated_at: FieldRef<'collection', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * collection findUnique
   */
  export type collectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collection to fetch.
     */
    where: collectionWhereUniqueInput;
  };

  /**
   * collection findUniqueOrThrow
   */
  export type collectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collection to fetch.
     */
    where: collectionWhereUniqueInput;
  };

  /**
   * collection findFirst
   */
  export type collectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collection to fetch.
     */
    where?: collectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collections.
     */
    cursor?: collectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * collection findFirstOrThrow
   */
  export type collectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collection to fetch.
     */
    where?: collectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collections.
     */
    cursor?: collectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * collection findMany
   */
  export type collectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collections to fetch.
     */
    where?: collectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing collections.
     */
    cursor?: collectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * collection create
   */
  export type collectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a collection.
     */
    data: XOR<collectionCreateInput, collectionUncheckedCreateInput>;
  };

  /**
   * collection createMany
   */
  export type collectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collections.
     */
    data: collectionCreateManyInput | collectionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * collection update
   */
  export type collectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a collection.
     */
    data: XOR<collectionUpdateInput, collectionUncheckedUpdateInput>;
    /**
     * Choose, which collection to update.
     */
    where: collectionWhereUniqueInput;
  };

  /**
   * collection updateMany
   */
  export type collectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collections.
     */
    data: XOR<collectionUpdateManyMutationInput, collectionUncheckedUpdateManyInput>;
    /**
     * Filter which collections to update
     */
    where?: collectionWhereInput;
  };

  /**
   * collection upsert
   */
  export type collectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the collection to update in case it exists.
     */
    where: collectionWhereUniqueInput;
    /**
     * In case the collection found by the `where` argument doesn't exist, create a new collection with this data.
     */
    create: XOR<collectionCreateInput, collectionUncheckedCreateInput>;
    /**
     * In case the collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collectionUpdateInput, collectionUncheckedUpdateInput>;
  };

  /**
   * collection delete
   */
  export type collectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter which collection to delete.
     */
    where: collectionWhereUniqueInput;
  };

  /**
   * collection deleteMany
   */
  export type collectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collections to delete
     */
    where?: collectionWhereInput;
  };

  /**
   * collection.blu_ray
   */
  export type collection$blu_rayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blu_ray
     */
    select?: blu_raySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: blu_rayInclude<ExtArgs> | null;
    where?: blu_rayWhereInput;
    orderBy?: blu_rayOrderByWithRelationInput | blu_rayOrderByWithRelationInput[];
    cursor?: blu_rayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Blu_rayScalarFieldEnum | Blu_rayScalarFieldEnum[];
  };

  /**
   * collection without action
   */
  export type collectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    founded_date: Date | null;
    website: string | null;
    contact_number: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    founded_date: Date | null;
    website: string | null;
    contact_number: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    founded_date: number;
    website: number;
    contact_number: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    founded_date?: true;
    website?: true;
    contact_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    founded_date?: true;
    website?: true;
    contact_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    founded_date?: true;
    website?: true;
    contact_number?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    founded_date: Date | null;
    website: string | null;
    contact_number: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      location?: boolean;
      founded_date?: boolean;
      website?: boolean;
      contact_number?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | company$userArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    founded_date?: boolean;
    website?: boolean;
    contact_number?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | company$userArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        founded_date: Date | null;
        website: string | null;
        contact_number: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends company$userArgs<ExtArgs> = {}>(
      args?: Subset<T, company$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly location: FieldRef<'company', 'String'>;
    readonly founded_date: FieldRef<'company', 'DateTime'>;
    readonly website: FieldRef<'company', 'String'>;
    readonly contact_number: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.user
   */
  export type company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerAvgAggregateOutputType = {
    price: number | null;
  };

  export type CustomerSumAggregateOutputType = {
    price: number | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    blu_ray_id: string | null;
    purchase_date: Date | null;
    price: number | null;
    payment_method: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    blu_ray_id: string | null;
    purchase_date: Date | null;
    price: number | null;
    payment_method: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    user_id: number;
    blu_ray_id: number;
    purchase_date: number;
    price: number;
    payment_method: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CustomerAvgAggregateInputType = {
    price?: true;
  };

  export type CustomerSumAggregateInputType = {
    price?: true;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    blu_ray_id?: true;
    purchase_date?: true;
    price?: true;
    payment_method?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    blu_ray_id?: true;
    purchase_date?: true;
    price?: true;
    payment_method?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    blu_ray_id?: true;
    purchase_date?: true;
    price?: true;
    payment_method?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CustomerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CustomerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput;
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: string;
    user_id: string;
    blu_ray_id: string;
    purchase_date: Date | null;
    price: number | null;
    payment_method: string | null;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
      }
    >
  >;

  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        blu_ray_id?: boolean;
        purchase_date?: boolean;
        price?: boolean;
        payment_method?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        blu_ray?: boolean | blu_rayDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer']
    >;

  export type customerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    blu_ray_id?: boolean;
    purchase_date?: boolean;
    price?: boolean;
    payment_method?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blu_ray?: boolean | blu_rayDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer';
    objects: {
      blu_ray: Prisma.$blu_rayPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        blu_ray_id: string;
        purchase_date: Date | null;
        price: number | null;
        payment_method: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<
    Prisma.$customerPayload,
    S
  >;

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer']; meta: { name: 'customer' } };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends customerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customerCreateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends customerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customerDeleteArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends customerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpsertArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer model
     */
    readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blu_ray<T extends blu_rayDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, blu_rayDefaultArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<
      $Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<'customer', 'String'>;
    readonly user_id: FieldRef<'customer', 'String'>;
    readonly blu_ray_id: FieldRef<'customer', 'String'>;
    readonly purchase_date: FieldRef<'customer', 'DateTime'>;
    readonly price: FieldRef<'customer', 'Int'>;
    readonly payment_method: FieldRef<'customer', 'String'>;
    readonly created_at: FieldRef<'customer', 'DateTime'>;
    readonly updated_at: FieldRef<'customer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>;
  };

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>;
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput;
  };

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput;
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>;
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
  };

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput;
  };

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
  };

  /**
   * Model owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  export type OwnerAvgAggregateOutputType = {
    price: number | null;
  };

  export type OwnerSumAggregateOutputType = {
    price: number | null;
  };

  export type OwnerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    blu_ray_id: string | null;
    purchase_date: Date | null;
    price: number | null;
    condition: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    blu_ray_id: string | null;
    purchase_date: Date | null;
    price: number | null;
    condition: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OwnerCountAggregateOutputType = {
    id: number;
    user_id: number;
    blu_ray_id: number;
    purchase_date: number;
    price: number;
    condition: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OwnerAvgAggregateInputType = {
    price?: true;
  };

  export type OwnerSumAggregateInputType = {
    price?: true;
  };

  export type OwnerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    blu_ray_id?: true;
    purchase_date?: true;
    price?: true;
    condition?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    blu_ray_id?: true;
    purchase_date?: true;
    price?: true;
    condition?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OwnerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    blu_ray_id?: true;
    purchase_date?: true;
    price?: true;
    condition?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owner to aggregate.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned owners
     **/
    _count?: true | OwnerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OwnerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OwnerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OwnerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OwnerMaxAggregateInputType;
  };

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
    [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>;
  };

  export type ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithAggregationInput | ownerOrderByWithAggregationInput[];
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum;
    having?: ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OwnerCountAggregateInputType | true;
    _avg?: OwnerAvgAggregateInputType;
    _sum?: OwnerSumAggregateInputType;
    _min?: OwnerMinAggregateInputType;
    _max?: OwnerMaxAggregateInputType;
  };

  export type OwnerGroupByOutputType = {
    id: string;
    user_id: string;
    blu_ray_id: string;
    purchase_date: Date | null;
    price: number | null;
    condition: string | null;
    created_at: Date;
    updated_at: Date;
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
  };

  type GetOwnerGroupByPayload<T extends ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OwnerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
          : GetScalarType<T[P], OwnerGroupByOutputType[P]>;
      }
    >
  >;

  export type ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      blu_ray_id?: boolean;
      purchase_date?: boolean;
      price?: boolean;
      condition?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      blu_ray?: boolean | blu_rayDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['owner']
  >;

  export type ownerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    blu_ray_id?: boolean;
    purchase_date?: boolean;
    price?: boolean;
    condition?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blu_ray?: boolean | blu_rayDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'owner';
    objects: {
      blu_ray: Prisma.$blu_rayPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        blu_ray_id: string;
        purchase_date: Date | null;
        price: number | null;
        condition: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['owner']
    >;
    composites: {};
  };

  type ownerGetPayload<S extends boolean | null | undefined | ownerDefaultArgs> = $Result.GetResult<
    Prisma.$ownerPayload,
    S
  >;

  type ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ownerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OwnerCountAggregateInputType | true;
  };

  export interface ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['owner']; meta: { name: 'owner' } };
    /**
     * Find zero or one Owner that matches the filter.
     * @param {ownerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ownerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     *
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Owner.
     * @param {ownerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     *
     **/
    create<T extends ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerCreateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Owners.
     *     @param {ownerCreateManyArgs} args - Arguments to create many Owners.
     *     @example
     *     // Create many Owners
     *     const owner = await prisma.owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Owner.
     * @param {ownerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     *
     **/
    delete<T extends ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ownerDeleteArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Owner.
     * @param {ownerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Owners.
     * @param {ownerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Owner.
     * @param {ownerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     **/
    upsert<T extends ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ownerUpsertArgs<ExtArgs>>,
    ): Prisma__ownerClient<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
     **/
    count<T extends ownerCountArgs>(
      args?: Subset<T, ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OwnerAggregateArgs>(
      args: Subset<T, OwnerAggregateArgs>,
    ): Prisma.PrismaPromise<GetOwnerAggregateType<T>>;

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ownerGroupByArgs['orderBy'] }
        : { orderBy?: ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the owner model
     */
    readonly fields: ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    blu_ray<T extends blu_rayDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, blu_rayDefaultArgs<ExtArgs>>,
    ): Prisma__blu_rayClient<
      $Result.GetResult<Prisma.$blu_rayPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the owner model
   */
  interface ownerFieldRefs {
    readonly id: FieldRef<'owner', 'String'>;
    readonly user_id: FieldRef<'owner', 'String'>;
    readonly blu_ray_id: FieldRef<'owner', 'String'>;
    readonly purchase_date: FieldRef<'owner', 'DateTime'>;
    readonly price: FieldRef<'owner', 'Int'>;
    readonly condition: FieldRef<'owner', 'String'>;
    readonly created_at: FieldRef<'owner', 'DateTime'>;
    readonly updated_at: FieldRef<'owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * owner findUnique
   */
  export type ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findUniqueOrThrow
   */
  export type ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner findFirst
   */
  export type ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findFirstOrThrow
   */
  export type ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owner to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner findMany
   */
  export type ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter, which owners to fetch.
     */
    where?: ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of owners to fetch.
     */
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing owners.
     */
    cursor?: ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` owners.
     */
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * owner create
   */
  export type ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a owner.
     */
    data: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
  };

  /**
   * owner createMany
   */
  export type ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many owners.
     */
    data: ownerCreateManyInput | ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * owner update
   */
  export type ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a owner.
     */
    data: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
    /**
     * Choose, which owner to update.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner updateMany
   */
  export type ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update owners.
     */
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyInput>;
    /**
     * Filter which owners to update
     */
    where?: ownerWhereInput;
  };

  /**
   * owner upsert
   */
  export type ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the owner to update in case it exists.
     */
    where: ownerWhereUniqueInput;
    /**
     * In case the owner found by the `where` argument doesn't exist, create a new owner with this data.
     */
    create: XOR<ownerCreateInput, ownerUncheckedCreateInput>;
    /**
     * In case the owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ownerUpdateInput, ownerUncheckedUpdateInput>;
  };

  /**
   * owner delete
   */
  export type ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    /**
     * Filter which owner to delete.
     */
    where: ownerWhereUniqueInput;
  };

  /**
   * owner deleteMany
   */
  export type ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to delete
     */
    where?: ownerWhereInput;
  };

  /**
   * owner without action
   */
  export type ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    company_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      company_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      collection?: boolean | user$collectionArgs<ExtArgs>;
      customer?: boolean | user$customerArgs<ExtArgs>;
      owner?: boolean | user$ownerArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    company_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | user$collectionArgs<ExtArgs>;
    customer?: boolean | user$customerArgs<ExtArgs>;
    owner?: boolean | user$ownerArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      collection: Prisma.$collectionPayload<ExtArgs>[];
      customer: Prisma.$customerPayload<ExtArgs>[];
      owner: Prisma.$ownerPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        company_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collection<T extends user$collectionArgs<ExtArgs> = {}>(
      args?: Subset<T, user$collectionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    customer<T extends user$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends user$ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly company_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.collection
   */
  export type user$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    where?: collectionWhereInput;
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    cursor?: collectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * user.owner
   */
  export type user$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner
     */
    select?: ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ownerInclude<ExtArgs> | null;
    where?: ownerWhereInput;
    orderBy?: ownerOrderByWithRelationInput | ownerOrderByWithRelationInput[];
    cursor?: ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Blu_rayScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    release_date: 'release_date';
    rating: 'rating';
    collection_id: 'collection_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Blu_rayScalarFieldEnum = (typeof Blu_rayScalarFieldEnum)[keyof typeof Blu_rayScalarFieldEnum];

  export const CollectionScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    release_date: 'release_date';
    rating: 'rating';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    founded_date: 'founded_date';
    website: 'website';
    contact_number: 'contact_number';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    blu_ray_id: 'blu_ray_id';
    purchase_date: 'purchase_date';
    price: 'price';
    payment_method: 'payment_method';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const OwnerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    blu_ray_id: 'blu_ray_id';
    purchase_date: 'purchase_date';
    price: 'price';
    condition: 'condition';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    company_id: 'company_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type blu_rayWhereInput = {
    AND?: blu_rayWhereInput | blu_rayWhereInput[];
    OR?: blu_rayWhereInput[];
    NOT?: blu_rayWhereInput | blu_rayWhereInput[];
    id?: UuidFilter<'blu_ray'> | string;
    title?: StringFilter<'blu_ray'> | string;
    description?: StringNullableFilter<'blu_ray'> | string | null;
    release_date?: DateTimeNullableFilter<'blu_ray'> | Date | string | null;
    rating?: IntNullableFilter<'blu_ray'> | number | null;
    collection_id?: UuidFilter<'blu_ray'> | string;
    created_at?: DateTimeFilter<'blu_ray'> | Date | string;
    updated_at?: DateTimeFilter<'blu_ray'> | Date | string;
    collection?: XOR<CollectionRelationFilter, collectionWhereInput>;
    customer?: CustomerListRelationFilter;
    owner?: OwnerListRelationFilter;
  };

  export type blu_rayOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    release_date?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    collection_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    collection?: collectionOrderByWithRelationInput;
    customer?: customerOrderByRelationAggregateInput;
    owner?: ownerOrderByRelationAggregateInput;
  };

  export type blu_rayWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: blu_rayWhereInput | blu_rayWhereInput[];
      OR?: blu_rayWhereInput[];
      NOT?: blu_rayWhereInput | blu_rayWhereInput[];
      title?: StringFilter<'blu_ray'> | string;
      description?: StringNullableFilter<'blu_ray'> | string | null;
      release_date?: DateTimeNullableFilter<'blu_ray'> | Date | string | null;
      rating?: IntNullableFilter<'blu_ray'> | number | null;
      collection_id?: UuidFilter<'blu_ray'> | string;
      created_at?: DateTimeFilter<'blu_ray'> | Date | string;
      updated_at?: DateTimeFilter<'blu_ray'> | Date | string;
      collection?: XOR<CollectionRelationFilter, collectionWhereInput>;
      customer?: CustomerListRelationFilter;
      owner?: OwnerListRelationFilter;
    },
    'id'
  >;

  export type blu_rayOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    release_date?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    collection_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: blu_rayCountOrderByAggregateInput;
    _avg?: blu_rayAvgOrderByAggregateInput;
    _max?: blu_rayMaxOrderByAggregateInput;
    _min?: blu_rayMinOrderByAggregateInput;
    _sum?: blu_raySumOrderByAggregateInput;
  };

  export type blu_rayScalarWhereWithAggregatesInput = {
    AND?: blu_rayScalarWhereWithAggregatesInput | blu_rayScalarWhereWithAggregatesInput[];
    OR?: blu_rayScalarWhereWithAggregatesInput[];
    NOT?: blu_rayScalarWhereWithAggregatesInput | blu_rayScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'blu_ray'> | string;
    title?: StringWithAggregatesFilter<'blu_ray'> | string;
    description?: StringNullableWithAggregatesFilter<'blu_ray'> | string | null;
    release_date?: DateTimeNullableWithAggregatesFilter<'blu_ray'> | Date | string | null;
    rating?: IntNullableWithAggregatesFilter<'blu_ray'> | number | null;
    collection_id?: UuidWithAggregatesFilter<'blu_ray'> | string;
    created_at?: DateTimeWithAggregatesFilter<'blu_ray'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'blu_ray'> | Date | string;
  };

  export type collectionWhereInput = {
    AND?: collectionWhereInput | collectionWhereInput[];
    OR?: collectionWhereInput[];
    NOT?: collectionWhereInput | collectionWhereInput[];
    id?: UuidFilter<'collection'> | string;
    name?: StringFilter<'collection'> | string;
    description?: StringNullableFilter<'collection'> | string | null;
    release_date?: DateTimeNullableFilter<'collection'> | Date | string | null;
    rating?: IntNullableFilter<'collection'> | number | null;
    user_id?: UuidFilter<'collection'> | string;
    created_at?: DateTimeFilter<'collection'> | Date | string;
    updated_at?: DateTimeFilter<'collection'> | Date | string;
    blu_ray?: Blu_rayListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type collectionOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    release_date?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    blu_ray?: blu_rayOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type collectionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: collectionWhereInput | collectionWhereInput[];
      OR?: collectionWhereInput[];
      NOT?: collectionWhereInput | collectionWhereInput[];
      name?: StringFilter<'collection'> | string;
      description?: StringNullableFilter<'collection'> | string | null;
      release_date?: DateTimeNullableFilter<'collection'> | Date | string | null;
      rating?: IntNullableFilter<'collection'> | number | null;
      user_id?: UuidFilter<'collection'> | string;
      created_at?: DateTimeFilter<'collection'> | Date | string;
      updated_at?: DateTimeFilter<'collection'> | Date | string;
      blu_ray?: Blu_rayListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type collectionOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    release_date?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: collectionCountOrderByAggregateInput;
    _avg?: collectionAvgOrderByAggregateInput;
    _max?: collectionMaxOrderByAggregateInput;
    _min?: collectionMinOrderByAggregateInput;
    _sum?: collectionSumOrderByAggregateInput;
  };

  export type collectionScalarWhereWithAggregatesInput = {
    AND?: collectionScalarWhereWithAggregatesInput | collectionScalarWhereWithAggregatesInput[];
    OR?: collectionScalarWhereWithAggregatesInput[];
    NOT?: collectionScalarWhereWithAggregatesInput | collectionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'collection'> | string;
    name?: StringWithAggregatesFilter<'collection'> | string;
    description?: StringNullableWithAggregatesFilter<'collection'> | string | null;
    release_date?: DateTimeNullableWithAggregatesFilter<'collection'> | Date | string | null;
    rating?: IntNullableWithAggregatesFilter<'collection'> | number | null;
    user_id?: UuidWithAggregatesFilter<'collection'> | string;
    created_at?: DateTimeWithAggregatesFilter<'collection'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'collection'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    location?: StringNullableFilter<'company'> | string | null;
    founded_date?: DateTimeNullableFilter<'company'> | Date | string | null;
    website?: StringNullableFilter<'company'> | string | null;
    contact_number?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    founded_date?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      location?: StringNullableFilter<'company'> | string | null;
      founded_date?: DateTimeNullableFilter<'company'> | Date | string | null;
      website?: StringNullableFilter<'company'> | string | null;
      contact_number?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    founded_date?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    contact_number?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    location?: StringNullableWithAggregatesFilter<'company'> | string | null;
    founded_date?: DateTimeNullableWithAggregatesFilter<'company'> | Date | string | null;
    website?: StringNullableWithAggregatesFilter<'company'> | string | null;
    contact_number?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
  };

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[];
    OR?: customerWhereInput[];
    NOT?: customerWhereInput | customerWhereInput[];
    id?: UuidFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    blu_ray_id?: UuidFilter<'customer'> | string;
    purchase_date?: DateTimeNullableFilter<'customer'> | Date | string | null;
    price?: IntNullableFilter<'customer'> | number | null;
    payment_method?: StringNullableFilter<'customer'> | string | null;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
    blu_ray?: XOR<Blu_rayRelationFilter, blu_rayWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type customerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    blu_ray?: blu_rayOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type customerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customerWhereInput | customerWhereInput[];
      OR?: customerWhereInput[];
      NOT?: customerWhereInput | customerWhereInput[];
      user_id?: UuidFilter<'customer'> | string;
      blu_ray_id?: UuidFilter<'customer'> | string;
      purchase_date?: DateTimeNullableFilter<'customer'> | Date | string | null;
      price?: IntNullableFilter<'customer'> | number | null;
      payment_method?: StringNullableFilter<'customer'> | string | null;
      created_at?: DateTimeFilter<'customer'> | Date | string;
      updated_at?: DateTimeFilter<'customer'> | Date | string;
      blu_ray?: XOR<Blu_rayRelationFilter, blu_rayWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customerCountOrderByAggregateInput;
    _avg?: customerAvgOrderByAggregateInput;
    _max?: customerMaxOrderByAggregateInput;
    _min?: customerMinOrderByAggregateInput;
    _sum?: customerSumOrderByAggregateInput;
  };

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    OR?: customerScalarWhereWithAggregatesInput[];
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer'> | string;
    user_id?: UuidWithAggregatesFilter<'customer'> | string;
    blu_ray_id?: UuidWithAggregatesFilter<'customer'> | string;
    purchase_date?: DateTimeNullableWithAggregatesFilter<'customer'> | Date | string | null;
    price?: IntNullableWithAggregatesFilter<'customer'> | number | null;
    payment_method?: StringNullableWithAggregatesFilter<'customer'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
  };

  export type ownerWhereInput = {
    AND?: ownerWhereInput | ownerWhereInput[];
    OR?: ownerWhereInput[];
    NOT?: ownerWhereInput | ownerWhereInput[];
    id?: UuidFilter<'owner'> | string;
    user_id?: UuidFilter<'owner'> | string;
    blu_ray_id?: UuidFilter<'owner'> | string;
    purchase_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
    price?: IntNullableFilter<'owner'> | number | null;
    condition?: StringNullableFilter<'owner'> | string | null;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
    blu_ray?: XOR<Blu_rayRelationFilter, blu_rayWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type ownerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    condition?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    blu_ray?: blu_rayOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ownerWhereInput | ownerWhereInput[];
      OR?: ownerWhereInput[];
      NOT?: ownerWhereInput | ownerWhereInput[];
      user_id?: UuidFilter<'owner'> | string;
      blu_ray_id?: UuidFilter<'owner'> | string;
      purchase_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
      price?: IntNullableFilter<'owner'> | number | null;
      condition?: StringNullableFilter<'owner'> | string | null;
      created_at?: DateTimeFilter<'owner'> | Date | string;
      updated_at?: DateTimeFilter<'owner'> | Date | string;
      blu_ray?: XOR<Blu_rayRelationFilter, blu_rayWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrderInput | SortOrder;
    price?: SortOrderInput | SortOrder;
    condition?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ownerCountOrderByAggregateInput;
    _avg?: ownerAvgOrderByAggregateInput;
    _max?: ownerMaxOrderByAggregateInput;
    _min?: ownerMinOrderByAggregateInput;
    _sum?: ownerSumOrderByAggregateInput;
  };

  export type ownerScalarWhereWithAggregatesInput = {
    AND?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    OR?: ownerScalarWhereWithAggregatesInput[];
    NOT?: ownerScalarWhereWithAggregatesInput | ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'owner'> | string;
    user_id?: UuidWithAggregatesFilter<'owner'> | string;
    blu_ray_id?: UuidWithAggregatesFilter<'owner'> | string;
    purchase_date?: DateTimeNullableWithAggregatesFilter<'owner'> | Date | string | null;
    price?: IntNullableWithAggregatesFilter<'owner'> | number | null;
    condition?: StringNullableWithAggregatesFilter<'owner'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'owner'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    collection?: CollectionListRelationFilter;
    customer?: CustomerListRelationFilter;
    owner?: OwnerListRelationFilter;
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    collection?: collectionOrderByRelationAggregateInput;
    customer?: customerOrderByRelationAggregateInput;
    owner?: ownerOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      company_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      collection?: CollectionListRelationFilter;
      customer?: CustomerListRelationFilter;
      owner?: OwnerListRelationFilter;
      company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    company_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type blu_rayCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection: collectionCreateNestedOneWithoutBlu_rayInput;
    customer?: customerCreateNestedManyWithoutBlu_rayInput;
    owner?: ownerCreateNestedManyWithoutBlu_rayInput;
  };

  export type blu_rayUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    collection_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutBlu_rayInput;
    owner?: ownerUncheckedCreateNestedManyWithoutBlu_rayInput;
  };

  export type blu_rayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateOneRequiredWithoutBlu_rayNestedInput;
    customer?: customerUpdateManyWithoutBlu_rayNestedInput;
    owner?: ownerUpdateManyWithoutBlu_rayNestedInput;
  };

  export type blu_rayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    collection_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutBlu_rayNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutBlu_rayNestedInput;
  };

  export type blu_rayCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    collection_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type blu_rayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type blu_rayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    collection_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collectionCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    blu_ray?: blu_rayCreateNestedManyWithoutCollectionInput;
    user: userCreateNestedOneWithoutCollectionInput;
  };

  export type collectionUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    blu_ray?: blu_rayUncheckedCreateNestedManyWithoutCollectionInput;
  };

  export type collectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blu_ray?: blu_rayUpdateManyWithoutCollectionNestedInput;
    user?: userUpdateOneRequiredWithoutCollectionNestedInput;
  };

  export type collectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blu_ray?: blu_rayUncheckedUpdateManyWithoutCollectionNestedInput;
  };

  export type collectionCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    founded_date?: Date | string | null;
    website?: string | null;
    contact_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    founded_date?: Date | string | null;
    website?: string | null;
    contact_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    founded_date?: Date | string | null;
    website?: string | null;
    contact_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateInput = {
    id?: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    blu_ray: blu_rayCreateNestedOneWithoutCustomerInput;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    blu_ray_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blu_ray?: blu_rayUpdateOneRequiredWithoutCustomerNestedInput;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    blu_ray_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyInput = {
    id?: string;
    user_id: string;
    blu_ray_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    blu_ray_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateInput = {
    id?: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    blu_ray: blu_rayCreateNestedOneWithoutOwnerInput;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    blu_ray_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blu_ray?: blu_rayUpdateOneRequiredWithoutOwnerNestedInput;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    blu_ray_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerCreateManyInput = {
    id?: string;
    user_id: string;
    blu_ray_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    blu_ray_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CollectionRelationFilter = {
    is?: collectionWhereInput;
    isNot?: collectionWhereInput;
  };

  export type CustomerListRelationFilter = {
    every?: customerWhereInput;
    some?: customerWhereInput;
    none?: customerWhereInput;
  };

  export type OwnerListRelationFilter = {
    every?: ownerWhereInput;
    some?: ownerWhereInput;
    none?: ownerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type blu_rayCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    collection_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type blu_rayAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type blu_rayMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    collection_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type blu_rayMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    collection_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type blu_raySumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type Blu_rayListRelationFilter = {
    every?: blu_rayWhereInput;
    some?: blu_rayWhereInput;
    none?: blu_rayWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type blu_rayOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type collectionCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collectionAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type collectionMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collectionMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    release_date?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collectionSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    founded_date?: SortOrder;
    website?: SortOrder;
    contact_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    founded_date?: SortOrder;
    website?: SortOrder;
    contact_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    founded_date?: SortOrder;
    website?: SortOrder;
    contact_number?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Blu_rayRelationFilter = {
    is?: blu_rayWhereInput;
    isNot?: blu_rayWhereInput;
  };

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrder;
    price?: SortOrder;
    payment_method?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrder;
    price?: SortOrder;
    payment_method?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrder;
    price?: SortOrder;
    payment_method?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrder;
    price?: SortOrder;
    condition?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrder;
    price?: SortOrder;
    condition?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    blu_ray_id?: SortOrder;
    purchase_date?: SortOrder;
    price?: SortOrder;
    condition?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ownerSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type CollectionListRelationFilter = {
    every?: collectionWhereInput;
    some?: collectionWhereInput;
    none?: collectionWhereInput;
  };

  export type CompanyNullableRelationFilter = {
    is?: companyWhereInput | null;
    isNot?: companyWhereInput | null;
  };

  export type collectionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type collectionCreateNestedOneWithoutBlu_rayInput = {
    create?: XOR<collectionCreateWithoutBlu_rayInput, collectionUncheckedCreateWithoutBlu_rayInput>;
    connectOrCreate?: collectionCreateOrConnectWithoutBlu_rayInput;
    connect?: collectionWhereUniqueInput;
  };

  export type customerCreateNestedManyWithoutBlu_rayInput = {
    create?:
      | XOR<customerCreateWithoutBlu_rayInput, customerUncheckedCreateWithoutBlu_rayInput>
      | customerCreateWithoutBlu_rayInput[]
      | customerUncheckedCreateWithoutBlu_rayInput[];
    connectOrCreate?: customerCreateOrConnectWithoutBlu_rayInput | customerCreateOrConnectWithoutBlu_rayInput[];
    createMany?: customerCreateManyBlu_rayInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type ownerCreateNestedManyWithoutBlu_rayInput = {
    create?:
      | XOR<ownerCreateWithoutBlu_rayInput, ownerUncheckedCreateWithoutBlu_rayInput>
      | ownerCreateWithoutBlu_rayInput[]
      | ownerUncheckedCreateWithoutBlu_rayInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutBlu_rayInput | ownerCreateOrConnectWithoutBlu_rayInput[];
    createMany?: ownerCreateManyBlu_rayInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutBlu_rayInput = {
    create?:
      | XOR<customerCreateWithoutBlu_rayInput, customerUncheckedCreateWithoutBlu_rayInput>
      | customerCreateWithoutBlu_rayInput[]
      | customerUncheckedCreateWithoutBlu_rayInput[];
    connectOrCreate?: customerCreateOrConnectWithoutBlu_rayInput | customerCreateOrConnectWithoutBlu_rayInput[];
    createMany?: customerCreateManyBlu_rayInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutBlu_rayInput = {
    create?:
      | XOR<ownerCreateWithoutBlu_rayInput, ownerUncheckedCreateWithoutBlu_rayInput>
      | ownerCreateWithoutBlu_rayInput[]
      | ownerUncheckedCreateWithoutBlu_rayInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutBlu_rayInput | ownerCreateOrConnectWithoutBlu_rayInput[];
    createMany?: ownerCreateManyBlu_rayInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type collectionUpdateOneRequiredWithoutBlu_rayNestedInput = {
    create?: XOR<collectionCreateWithoutBlu_rayInput, collectionUncheckedCreateWithoutBlu_rayInput>;
    connectOrCreate?: collectionCreateOrConnectWithoutBlu_rayInput;
    upsert?: collectionUpsertWithoutBlu_rayInput;
    connect?: collectionWhereUniqueInput;
    update?: XOR<
      XOR<collectionUpdateToOneWithWhereWithoutBlu_rayInput, collectionUpdateWithoutBlu_rayInput>,
      collectionUncheckedUpdateWithoutBlu_rayInput
    >;
  };

  export type customerUpdateManyWithoutBlu_rayNestedInput = {
    create?:
      | XOR<customerCreateWithoutBlu_rayInput, customerUncheckedCreateWithoutBlu_rayInput>
      | customerCreateWithoutBlu_rayInput[]
      | customerUncheckedCreateWithoutBlu_rayInput[];
    connectOrCreate?: customerCreateOrConnectWithoutBlu_rayInput | customerCreateOrConnectWithoutBlu_rayInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutBlu_rayInput | customerUpsertWithWhereUniqueWithoutBlu_rayInput[];
    createMany?: customerCreateManyBlu_rayInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutBlu_rayInput | customerUpdateWithWhereUniqueWithoutBlu_rayInput[];
    updateMany?: customerUpdateManyWithWhereWithoutBlu_rayInput | customerUpdateManyWithWhereWithoutBlu_rayInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type ownerUpdateManyWithoutBlu_rayNestedInput = {
    create?:
      | XOR<ownerCreateWithoutBlu_rayInput, ownerUncheckedCreateWithoutBlu_rayInput>
      | ownerCreateWithoutBlu_rayInput[]
      | ownerUncheckedCreateWithoutBlu_rayInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutBlu_rayInput | ownerCreateOrConnectWithoutBlu_rayInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutBlu_rayInput | ownerUpsertWithWhereUniqueWithoutBlu_rayInput[];
    createMany?: ownerCreateManyBlu_rayInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutBlu_rayInput | ownerUpdateWithWhereUniqueWithoutBlu_rayInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutBlu_rayInput | ownerUpdateManyWithWhereWithoutBlu_rayInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutBlu_rayNestedInput = {
    create?:
      | XOR<customerCreateWithoutBlu_rayInput, customerUncheckedCreateWithoutBlu_rayInput>
      | customerCreateWithoutBlu_rayInput[]
      | customerUncheckedCreateWithoutBlu_rayInput[];
    connectOrCreate?: customerCreateOrConnectWithoutBlu_rayInput | customerCreateOrConnectWithoutBlu_rayInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutBlu_rayInput | customerUpsertWithWhereUniqueWithoutBlu_rayInput[];
    createMany?: customerCreateManyBlu_rayInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutBlu_rayInput | customerUpdateWithWhereUniqueWithoutBlu_rayInput[];
    updateMany?: customerUpdateManyWithWhereWithoutBlu_rayInput | customerUpdateManyWithWhereWithoutBlu_rayInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutBlu_rayNestedInput = {
    create?:
      | XOR<ownerCreateWithoutBlu_rayInput, ownerUncheckedCreateWithoutBlu_rayInput>
      | ownerCreateWithoutBlu_rayInput[]
      | ownerUncheckedCreateWithoutBlu_rayInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutBlu_rayInput | ownerCreateOrConnectWithoutBlu_rayInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutBlu_rayInput | ownerUpsertWithWhereUniqueWithoutBlu_rayInput[];
    createMany?: ownerCreateManyBlu_rayInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutBlu_rayInput | ownerUpdateWithWhereUniqueWithoutBlu_rayInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutBlu_rayInput | ownerUpdateManyWithWhereWithoutBlu_rayInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type blu_rayCreateNestedManyWithoutCollectionInput = {
    create?:
      | XOR<blu_rayCreateWithoutCollectionInput, blu_rayUncheckedCreateWithoutCollectionInput>
      | blu_rayCreateWithoutCollectionInput[]
      | blu_rayUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?: blu_rayCreateOrConnectWithoutCollectionInput | blu_rayCreateOrConnectWithoutCollectionInput[];
    createMany?: blu_rayCreateManyCollectionInputEnvelope;
    connect?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutCollectionInput = {
    create?: XOR<userCreateWithoutCollectionInput, userUncheckedCreateWithoutCollectionInput>;
    connectOrCreate?: userCreateOrConnectWithoutCollectionInput;
    connect?: userWhereUniqueInput;
  };

  export type blu_rayUncheckedCreateNestedManyWithoutCollectionInput = {
    create?:
      | XOR<blu_rayCreateWithoutCollectionInput, blu_rayUncheckedCreateWithoutCollectionInput>
      | blu_rayCreateWithoutCollectionInput[]
      | blu_rayUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?: blu_rayCreateOrConnectWithoutCollectionInput | blu_rayCreateOrConnectWithoutCollectionInput[];
    createMany?: blu_rayCreateManyCollectionInputEnvelope;
    connect?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
  };

  export type blu_rayUpdateManyWithoutCollectionNestedInput = {
    create?:
      | XOR<blu_rayCreateWithoutCollectionInput, blu_rayUncheckedCreateWithoutCollectionInput>
      | blu_rayCreateWithoutCollectionInput[]
      | blu_rayUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?: blu_rayCreateOrConnectWithoutCollectionInput | blu_rayCreateOrConnectWithoutCollectionInput[];
    upsert?: blu_rayUpsertWithWhereUniqueWithoutCollectionInput | blu_rayUpsertWithWhereUniqueWithoutCollectionInput[];
    createMany?: blu_rayCreateManyCollectionInputEnvelope;
    set?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
    disconnect?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
    delete?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
    connect?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
    update?: blu_rayUpdateWithWhereUniqueWithoutCollectionInput | blu_rayUpdateWithWhereUniqueWithoutCollectionInput[];
    updateMany?: blu_rayUpdateManyWithWhereWithoutCollectionInput | blu_rayUpdateManyWithWhereWithoutCollectionInput[];
    deleteMany?: blu_rayScalarWhereInput | blu_rayScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutCollectionNestedInput = {
    create?: XOR<userCreateWithoutCollectionInput, userUncheckedCreateWithoutCollectionInput>;
    connectOrCreate?: userCreateOrConnectWithoutCollectionInput;
    upsert?: userUpsertWithoutCollectionInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCollectionInput, userUpdateWithoutCollectionInput>,
      userUncheckedUpdateWithoutCollectionInput
    >;
  };

  export type blu_rayUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?:
      | XOR<blu_rayCreateWithoutCollectionInput, blu_rayUncheckedCreateWithoutCollectionInput>
      | blu_rayCreateWithoutCollectionInput[]
      | blu_rayUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?: blu_rayCreateOrConnectWithoutCollectionInput | blu_rayCreateOrConnectWithoutCollectionInput[];
    upsert?: blu_rayUpsertWithWhereUniqueWithoutCollectionInput | blu_rayUpsertWithWhereUniqueWithoutCollectionInput[];
    createMany?: blu_rayCreateManyCollectionInputEnvelope;
    set?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
    disconnect?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
    delete?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
    connect?: blu_rayWhereUniqueInput | blu_rayWhereUniqueInput[];
    update?: blu_rayUpdateWithWhereUniqueWithoutCollectionInput | blu_rayUpdateWithWhereUniqueWithoutCollectionInput[];
    updateMany?: blu_rayUpdateManyWithWhereWithoutCollectionInput | blu_rayUpdateManyWithWhereWithoutCollectionInput[];
    deleteMany?: blu_rayScalarWhereInput | blu_rayScalarWhereInput[];
  };

  export type userCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type blu_rayCreateNestedOneWithoutCustomerInput = {
    create?: XOR<blu_rayCreateWithoutCustomerInput, blu_rayUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: blu_rayCreateOrConnectWithoutCustomerInput;
    connect?: blu_rayWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    connect?: userWhereUniqueInput;
  };

  export type blu_rayUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<blu_rayCreateWithoutCustomerInput, blu_rayUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: blu_rayCreateOrConnectWithoutCustomerInput;
    upsert?: blu_rayUpsertWithoutCustomerInput;
    connect?: blu_rayWhereUniqueInput;
    update?: XOR<
      XOR<blu_rayUpdateToOneWithWhereWithoutCustomerInput, blu_rayUpdateWithoutCustomerInput>,
      blu_rayUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    upsert?: userUpsertWithoutCustomerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>,
      userUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type blu_rayCreateNestedOneWithoutOwnerInput = {
    create?: XOR<blu_rayCreateWithoutOwnerInput, blu_rayUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: blu_rayCreateOrConnectWithoutOwnerInput;
    connect?: blu_rayWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutOwnerInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    connect?: userWhereUniqueInput;
  };

  export type blu_rayUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<blu_rayCreateWithoutOwnerInput, blu_rayUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: blu_rayCreateOrConnectWithoutOwnerInput;
    upsert?: blu_rayUpsertWithoutOwnerInput;
    connect?: blu_rayWhereUniqueInput;
    update?: XOR<
      XOR<blu_rayUpdateToOneWithWhereWithoutOwnerInput, blu_rayUpdateWithoutOwnerInput>,
      blu_rayUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type userUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOwnerInput;
    upsert?: userUpsertWithoutOwnerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOwnerInput, userUpdateWithoutOwnerInput>,
      userUncheckedUpdateWithoutOwnerInput
    >;
  };

  export type collectionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>
      | collectionCreateWithoutUserInput[]
      | collectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collectionCreateOrConnectWithoutUserInput | collectionCreateOrConnectWithoutUserInput[];
    createMany?: collectionCreateManyUserInputEnvelope;
    connect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
  };

  export type customerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutUserInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    connect?: companyWhereUniqueInput;
  };

  export type collectionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>
      | collectionCreateWithoutUserInput[]
      | collectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collectionCreateOrConnectWithoutUserInput | collectionCreateOrConnectWithoutUserInput[];
    createMany?: collectionCreateManyUserInputEnvelope;
    connect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
  };

  export type collectionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>
      | collectionCreateWithoutUserInput[]
      | collectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collectionCreateOrConnectWithoutUserInput | collectionCreateOrConnectWithoutUserInput[];
    upsert?: collectionUpsertWithWhereUniqueWithoutUserInput | collectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: collectionCreateManyUserInputEnvelope;
    set?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    disconnect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    delete?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    connect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    update?: collectionUpdateWithWhereUniqueWithoutUserInput | collectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: collectionUpdateManyWithWhereWithoutUserInput | collectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: collectionScalarWhereInput | collectionScalarWhereInput[];
  };

  export type customerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type companyUpdateOneWithoutUserNestedInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    upsert?: companyUpsertWithoutUserInput;
    disconnect?: companyWhereInput | boolean;
    delete?: companyWhereInput | boolean;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutUserInput, companyUpdateWithoutUserInput>,
      companyUncheckedUpdateWithoutUserInput
    >;
  };

  export type collectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>
      | collectionCreateWithoutUserInput[]
      | collectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collectionCreateOrConnectWithoutUserInput | collectionCreateOrConnectWithoutUserInput[];
    upsert?: collectionUpsertWithWhereUniqueWithoutUserInput | collectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: collectionCreateManyUserInputEnvelope;
    set?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    disconnect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    delete?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    connect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    update?: collectionUpdateWithWhereUniqueWithoutUserInput | collectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: collectionUpdateManyWithWhereWithoutUserInput | collectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: collectionScalarWhereInput | collectionScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>
      | ownerCreateWithoutUserInput[]
      | ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ownerCreateOrConnectWithoutUserInput | ownerCreateOrConnectWithoutUserInput[];
    upsert?: ownerUpsertWithWhereUniqueWithoutUserInput | ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ownerCreateManyUserInputEnvelope;
    set?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    disconnect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    delete?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    connect?: ownerWhereUniqueInput | ownerWhereUniqueInput[];
    update?: ownerUpdateWithWhereUniqueWithoutUserInput | ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ownerUpdateManyWithWhereWithoutUserInput | ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ownerScalarWhereInput | ownerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type collectionCreateWithoutBlu_rayInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCollectionInput;
  };

  export type collectionUncheckedCreateWithoutBlu_rayInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collectionCreateOrConnectWithoutBlu_rayInput = {
    where: collectionWhereUniqueInput;
    create: XOR<collectionCreateWithoutBlu_rayInput, collectionUncheckedCreateWithoutBlu_rayInput>;
  };

  export type customerCreateWithoutBlu_rayInput = {
    id?: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutBlu_rayInput = {
    id?: string;
    user_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutBlu_rayInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutBlu_rayInput, customerUncheckedCreateWithoutBlu_rayInput>;
  };

  export type customerCreateManyBlu_rayInputEnvelope = {
    data: customerCreateManyBlu_rayInput | customerCreateManyBlu_rayInput[];
    skipDuplicates?: boolean;
  };

  export type ownerCreateWithoutBlu_rayInput = {
    id?: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateWithoutBlu_rayInput = {
    id?: string;
    user_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutBlu_rayInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutBlu_rayInput, ownerUncheckedCreateWithoutBlu_rayInput>;
  };

  export type ownerCreateManyBlu_rayInputEnvelope = {
    data: ownerCreateManyBlu_rayInput | ownerCreateManyBlu_rayInput[];
    skipDuplicates?: boolean;
  };

  export type collectionUpsertWithoutBlu_rayInput = {
    update: XOR<collectionUpdateWithoutBlu_rayInput, collectionUncheckedUpdateWithoutBlu_rayInput>;
    create: XOR<collectionCreateWithoutBlu_rayInput, collectionUncheckedCreateWithoutBlu_rayInput>;
    where?: collectionWhereInput;
  };

  export type collectionUpdateToOneWithWhereWithoutBlu_rayInput = {
    where?: collectionWhereInput;
    data: XOR<collectionUpdateWithoutBlu_rayInput, collectionUncheckedUpdateWithoutBlu_rayInput>;
  };

  export type collectionUpdateWithoutBlu_rayInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCollectionNestedInput;
  };

  export type collectionUncheckedUpdateWithoutBlu_rayInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUpsertWithWhereUniqueWithoutBlu_rayInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutBlu_rayInput, customerUncheckedUpdateWithoutBlu_rayInput>;
    create: XOR<customerCreateWithoutBlu_rayInput, customerUncheckedCreateWithoutBlu_rayInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutBlu_rayInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutBlu_rayInput, customerUncheckedUpdateWithoutBlu_rayInput>;
  };

  export type customerUpdateManyWithWhereWithoutBlu_rayInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutBlu_rayInput>;
  };

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[];
    OR?: customerScalarWhereInput[];
    NOT?: customerScalarWhereInput | customerScalarWhereInput[];
    id?: UuidFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    blu_ray_id?: UuidFilter<'customer'> | string;
    purchase_date?: DateTimeNullableFilter<'customer'> | Date | string | null;
    price?: IntNullableFilter<'customer'> | number | null;
    payment_method?: StringNullableFilter<'customer'> | string | null;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
  };

  export type ownerUpsertWithWhereUniqueWithoutBlu_rayInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutBlu_rayInput, ownerUncheckedUpdateWithoutBlu_rayInput>;
    create: XOR<ownerCreateWithoutBlu_rayInput, ownerUncheckedCreateWithoutBlu_rayInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutBlu_rayInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutBlu_rayInput, ownerUncheckedUpdateWithoutBlu_rayInput>;
  };

  export type ownerUpdateManyWithWhereWithoutBlu_rayInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutBlu_rayInput>;
  };

  export type ownerScalarWhereInput = {
    AND?: ownerScalarWhereInput | ownerScalarWhereInput[];
    OR?: ownerScalarWhereInput[];
    NOT?: ownerScalarWhereInput | ownerScalarWhereInput[];
    id?: UuidFilter<'owner'> | string;
    user_id?: UuidFilter<'owner'> | string;
    blu_ray_id?: UuidFilter<'owner'> | string;
    purchase_date?: DateTimeNullableFilter<'owner'> | Date | string | null;
    price?: IntNullableFilter<'owner'> | number | null;
    condition?: StringNullableFilter<'owner'> | string | null;
    created_at?: DateTimeFilter<'owner'> | Date | string;
    updated_at?: DateTimeFilter<'owner'> | Date | string;
  };

  export type blu_rayCreateWithoutCollectionInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutBlu_rayInput;
    owner?: ownerCreateNestedManyWithoutBlu_rayInput;
  };

  export type blu_rayUncheckedCreateWithoutCollectionInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutBlu_rayInput;
    owner?: ownerUncheckedCreateNestedManyWithoutBlu_rayInput;
  };

  export type blu_rayCreateOrConnectWithoutCollectionInput = {
    where: blu_rayWhereUniqueInput;
    create: XOR<blu_rayCreateWithoutCollectionInput, blu_rayUncheckedCreateWithoutCollectionInput>;
  };

  export type blu_rayCreateManyCollectionInputEnvelope = {
    data: blu_rayCreateManyCollectionInput | blu_rayCreateManyCollectionInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutCollectionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCollectionInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCollectionInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCollectionInput, userUncheckedCreateWithoutCollectionInput>;
  };

  export type blu_rayUpsertWithWhereUniqueWithoutCollectionInput = {
    where: blu_rayWhereUniqueInput;
    update: XOR<blu_rayUpdateWithoutCollectionInput, blu_rayUncheckedUpdateWithoutCollectionInput>;
    create: XOR<blu_rayCreateWithoutCollectionInput, blu_rayUncheckedCreateWithoutCollectionInput>;
  };

  export type blu_rayUpdateWithWhereUniqueWithoutCollectionInput = {
    where: blu_rayWhereUniqueInput;
    data: XOR<blu_rayUpdateWithoutCollectionInput, blu_rayUncheckedUpdateWithoutCollectionInput>;
  };

  export type blu_rayUpdateManyWithWhereWithoutCollectionInput = {
    where: blu_rayScalarWhereInput;
    data: XOR<blu_rayUpdateManyMutationInput, blu_rayUncheckedUpdateManyWithoutCollectionInput>;
  };

  export type blu_rayScalarWhereInput = {
    AND?: blu_rayScalarWhereInput | blu_rayScalarWhereInput[];
    OR?: blu_rayScalarWhereInput[];
    NOT?: blu_rayScalarWhereInput | blu_rayScalarWhereInput[];
    id?: UuidFilter<'blu_ray'> | string;
    title?: StringFilter<'blu_ray'> | string;
    description?: StringNullableFilter<'blu_ray'> | string | null;
    release_date?: DateTimeNullableFilter<'blu_ray'> | Date | string | null;
    rating?: IntNullableFilter<'blu_ray'> | number | null;
    collection_id?: UuidFilter<'blu_ray'> | string;
    created_at?: DateTimeFilter<'blu_ray'> | Date | string;
    updated_at?: DateTimeFilter<'blu_ray'> | Date | string;
  };

  export type userUpsertWithoutCollectionInput = {
    update: XOR<userUpdateWithoutCollectionInput, userUncheckedUpdateWithoutCollectionInput>;
    create: XOR<userCreateWithoutCollectionInput, userUncheckedCreateWithoutCollectionInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCollectionInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCollectionInput, userUncheckedUpdateWithoutCollectionInput>;
  };

  export type userUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userCreateManyCompanyInputEnvelope = {
    data: userCreateManyCompanyInput | userCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpdateWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateManyWithWhereWithoutCompanyInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type blu_rayCreateWithoutCustomerInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection: collectionCreateNestedOneWithoutBlu_rayInput;
    owner?: ownerCreateNestedManyWithoutBlu_rayInput;
  };

  export type blu_rayUncheckedCreateWithoutCustomerInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    collection_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    owner?: ownerUncheckedCreateNestedManyWithoutBlu_rayInput;
  };

  export type blu_rayCreateOrConnectWithoutCustomerInput = {
    where: blu_rayWhereUniqueInput;
    create: XOR<blu_rayCreateWithoutCustomerInput, blu_rayUncheckedCreateWithoutCustomerInput>;
  };

  export type userCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionCreateNestedManyWithoutUserInput;
    owner?: ownerCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionUncheckedCreateNestedManyWithoutUserInput;
    owner?: ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
  };

  export type blu_rayUpsertWithoutCustomerInput = {
    update: XOR<blu_rayUpdateWithoutCustomerInput, blu_rayUncheckedUpdateWithoutCustomerInput>;
    create: XOR<blu_rayCreateWithoutCustomerInput, blu_rayUncheckedCreateWithoutCustomerInput>;
    where?: blu_rayWhereInput;
  };

  export type blu_rayUpdateToOneWithWhereWithoutCustomerInput = {
    where?: blu_rayWhereInput;
    data: XOR<blu_rayUpdateWithoutCustomerInput, blu_rayUncheckedUpdateWithoutCustomerInput>;
  };

  export type blu_rayUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateOneRequiredWithoutBlu_rayNestedInput;
    owner?: ownerUpdateManyWithoutBlu_rayNestedInput;
  };

  export type blu_rayUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    collection_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: ownerUncheckedUpdateManyWithoutBlu_rayNestedInput;
  };

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
  };

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type blu_rayCreateWithoutOwnerInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection: collectionCreateNestedOneWithoutBlu_rayInput;
    customer?: customerCreateNestedManyWithoutBlu_rayInput;
  };

  export type blu_rayUncheckedCreateWithoutOwnerInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    collection_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutBlu_rayInput;
  };

  export type blu_rayCreateOrConnectWithoutOwnerInput = {
    where: blu_rayWhereUniqueInput;
    create: XOR<blu_rayCreateWithoutOwnerInput, blu_rayUncheckedCreateWithoutOwnerInput>;
  };

  export type userCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOwnerInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOwnerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
  };

  export type blu_rayUpsertWithoutOwnerInput = {
    update: XOR<blu_rayUpdateWithoutOwnerInput, blu_rayUncheckedUpdateWithoutOwnerInput>;
    create: XOR<blu_rayCreateWithoutOwnerInput, blu_rayUncheckedCreateWithoutOwnerInput>;
    where?: blu_rayWhereInput;
  };

  export type blu_rayUpdateToOneWithWhereWithoutOwnerInput = {
    where?: blu_rayWhereInput;
    data: XOR<blu_rayUpdateWithoutOwnerInput, blu_rayUncheckedUpdateWithoutOwnerInput>;
  };

  export type blu_rayUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateOneRequiredWithoutBlu_rayNestedInput;
    customer?: customerUpdateManyWithoutBlu_rayNestedInput;
  };

  export type blu_rayUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    collection_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutBlu_rayNestedInput;
  };

  export type userUpsertWithoutOwnerInput = {
    update: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
    create: XOR<userCreateWithoutOwnerInput, userUncheckedCreateWithoutOwnerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOwnerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOwnerInput, userUncheckedUpdateWithoutOwnerInput>;
  };

  export type userUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type collectionCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    blu_ray?: blu_rayCreateNestedManyWithoutCollectionInput;
  };

  export type collectionUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    blu_ray?: blu_rayUncheckedCreateNestedManyWithoutCollectionInput;
  };

  export type collectionCreateOrConnectWithoutUserInput = {
    where: collectionWhereUniqueInput;
    create: XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>;
  };

  export type collectionCreateManyUserInputEnvelope = {
    data: collectionCreateManyUserInput | collectionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type customerCreateWithoutUserInput = {
    id?: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    blu_ray: blu_rayCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutUserInput = {
    id?: string;
    blu_ray_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerCreateManyUserInputEnvelope = {
    data: customerCreateManyUserInput | customerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ownerCreateWithoutUserInput = {
    id?: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    blu_ray: blu_rayCreateNestedOneWithoutOwnerInput;
  };

  export type ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    blu_ray_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateOrConnectWithoutUserInput = {
    where: ownerWhereUniqueInput;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerCreateManyUserInputEnvelope = {
    data: ownerCreateManyUserInput | ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    founded_date?: Date | string | null;
    website?: string | null;
    contact_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    founded_date?: Date | string | null;
    website?: string | null;
    contact_number?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type collectionUpsertWithWhereUniqueWithoutUserInput = {
    where: collectionWhereUniqueInput;
    update: XOR<collectionUpdateWithoutUserInput, collectionUncheckedUpdateWithoutUserInput>;
    create: XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>;
  };

  export type collectionUpdateWithWhereUniqueWithoutUserInput = {
    where: collectionWhereUniqueInput;
    data: XOR<collectionUpdateWithoutUserInput, collectionUncheckedUpdateWithoutUserInput>;
  };

  export type collectionUpdateManyWithWhereWithoutUserInput = {
    where: collectionScalarWhereInput;
    data: XOR<collectionUpdateManyMutationInput, collectionUncheckedUpdateManyWithoutUserInput>;
  };

  export type collectionScalarWhereInput = {
    AND?: collectionScalarWhereInput | collectionScalarWhereInput[];
    OR?: collectionScalarWhereInput[];
    NOT?: collectionScalarWhereInput | collectionScalarWhereInput[];
    id?: UuidFilter<'collection'> | string;
    name?: StringFilter<'collection'> | string;
    description?: StringNullableFilter<'collection'> | string | null;
    release_date?: DateTimeNullableFilter<'collection'> | Date | string | null;
    rating?: IntNullableFilter<'collection'> | number | null;
    user_id?: UuidFilter<'collection'> | string;
    created_at?: DateTimeFilter<'collection'> | Date | string;
    updated_at?: DateTimeFilter<'collection'> | Date | string;
  };

  export type customerUpsertWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
  };

  export type customerUpdateManyWithWhereWithoutUserInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutUserInput>;
  };

  export type ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    update: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<ownerCreateWithoutUserInput, ownerUncheckedCreateWithoutUserInput>;
  };

  export type ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: ownerWhereUniqueInput;
    data: XOR<ownerUpdateWithoutUserInput, ownerUncheckedUpdateWithoutUserInput>;
  };

  export type ownerUpdateManyWithWhereWithoutUserInput = {
    where: ownerScalarWhereInput;
    data: XOR<ownerUpdateManyMutationInput, ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithoutUserInput = {
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutUserInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    founded_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyBlu_rayInput = {
    id?: string;
    user_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateManyBlu_rayInput = {
    id?: string;
    user_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateWithoutBlu_rayInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutBlu_rayInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyWithoutBlu_rayInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUpdateWithoutBlu_rayInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateWithoutBlu_rayInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutBlu_rayInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type blu_rayCreateManyCollectionInput = {
    id?: string;
    title: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type blu_rayUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutBlu_rayNestedInput;
    owner?: ownerUpdateManyWithoutBlu_rayNestedInput;
  };

  export type blu_rayUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutBlu_rayNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutBlu_rayNestedInput;
  };

  export type blu_rayUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    owner?: ownerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    owner?: ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collectionCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateManyUserInput = {
    id?: string;
    blu_ray_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    payment_method?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ownerCreateManyUserInput = {
    id?: string;
    blu_ray_id: string;
    purchase_date?: Date | string | null;
    price?: number | null;
    condition?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blu_ray?: blu_rayUpdateManyWithoutCollectionNestedInput;
  };

  export type collectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blu_ray?: blu_rayUncheckedUpdateManyWithoutCollectionNestedInput;
  };

  export type collectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blu_ray?: blu_rayUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blu_ray_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blu_ray_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    blu_ray?: blu_rayUpdateOneRequiredWithoutOwnerNestedInput;
  };

  export type ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blu_ray_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    blu_ray_id?: StringFieldUpdateOperationsInput | string;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use Blu_rayCountOutputTypeDefaultArgs instead
   */
  export type Blu_rayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Blu_rayCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CollectionCountOutputTypeDefaultArgs instead
   */
  export type CollectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CollectionCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use blu_rayDefaultArgs instead
   */
  export type blu_rayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    blu_rayDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use collectionDefaultArgs instead
   */
  export type collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    collectionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customerDefaultArgs instead
   */
  export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ownerDefaultArgs instead
   */
  export type ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
