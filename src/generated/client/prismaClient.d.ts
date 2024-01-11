
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Chocolate_batch
 * 
 */
export type Chocolate_batch = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  recipe_id: string | null
  bean_origin: string
  importer: string
  production_date: Date
}

/**
 * Model Production_comments
 * 
 */
export type Production_comments = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  batch_id: string | null
  user_name: string
  comment_timestamp: Date | null
  comment_text: string
  attachment_path: string | null
}

/**
 * Model Recipe_ingredients
 * 
 */
export type Recipe_ingredients = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  recipe_id: string | null
  name: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  percentage: number
}

/**
 * Model Recipes
 * 
 */
export type Recipes = {
  /**
   * @zod.string.uuid()
   */
  id: string
  description: string
  name: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chocolate_batches
 * const chocolate_batches = await prisma.chocolate_batch.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chocolate_batches
   * const chocolate_batches = await prisma.chocolate_batch.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.chocolate_batch`: Exposes CRUD operations for the **Chocolate_batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chocolate_batches
    * const chocolate_batches = await prisma.chocolate_batch.findMany()
    * ```
    */
  get chocolate_batch(): Prisma.Chocolate_batchDelegate<GlobalReject>;

  /**
   * `prisma.production_comments`: Exposes CRUD operations for the **Production_comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Production_comments
    * const production_comments = await prisma.production_comments.findMany()
    * ```
    */
  get production_comments(): Prisma.Production_commentsDelegate<GlobalReject>;

  /**
   * `prisma.recipe_ingredients`: Exposes CRUD operations for the **Recipe_ingredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipe_ingredients
    * const recipe_ingredients = await prisma.recipe_ingredients.findMany()
    * ```
    */
  get recipe_ingredients(): Prisma.Recipe_ingredientsDelegate<GlobalReject>;

  /**
   * `prisma.recipes`: Exposes CRUD operations for the **Recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipes.findMany()
    * ```
    */
  get recipes(): Prisma.RecipesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

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
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Chocolate_batch: 'Chocolate_batch',
    Production_comments: 'Production_comments',
    Recipe_ingredients: 'Recipe_ingredients',
    Recipes: 'Recipes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Chocolate_batchCountOutputType
   */


  export type Chocolate_batchCountOutputType = {
    production_comments: number
  }

  export type Chocolate_batchCountOutputTypeSelect = {
    production_comments?: boolean
  }

  export type Chocolate_batchCountOutputTypeGetPayload<S extends boolean | null | undefined | Chocolate_batchCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Chocolate_batchCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Chocolate_batchCountOutputTypeArgs)
    ? Chocolate_batchCountOutputType 
    : S extends { select: any } & (Chocolate_batchCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Chocolate_batchCountOutputType ? Chocolate_batchCountOutputType[P] : never
  } 
      : Chocolate_batchCountOutputType




  // Custom InputTypes

  /**
   * Chocolate_batchCountOutputType without action
   */
  export type Chocolate_batchCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batchCountOutputType
     */
    select?: Chocolate_batchCountOutputTypeSelect | null
  }



  /**
   * Count Type RecipesCountOutputType
   */


  export type RecipesCountOutputType = {
    chocolate_batch: number
    recipe_ingredients: number
  }

  export type RecipesCountOutputTypeSelect = {
    chocolate_batch?: boolean
    recipe_ingredients?: boolean
  }

  export type RecipesCountOutputTypeGetPayload<S extends boolean | null | undefined | RecipesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RecipesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RecipesCountOutputTypeArgs)
    ? RecipesCountOutputType 
    : S extends { select: any } & (RecipesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RecipesCountOutputType ? RecipesCountOutputType[P] : never
  } 
      : RecipesCountOutputType




  // Custom InputTypes

  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RecipesCountOutputType
     */
    select?: RecipesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Chocolate_batch
   */


  export type AggregateChocolate_batch = {
    _count: Chocolate_batchCountAggregateOutputType | null
    _min: Chocolate_batchMinAggregateOutputType | null
    _max: Chocolate_batchMaxAggregateOutputType | null
  }

  export type Chocolate_batchMinAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    bean_origin: string | null
    importer: string | null
    production_date: Date | null
  }

  export type Chocolate_batchMaxAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    bean_origin: string | null
    importer: string | null
    production_date: Date | null
  }

  export type Chocolate_batchCountAggregateOutputType = {
    id: number
    recipe_id: number
    bean_origin: number
    importer: number
    production_date: number
    _all: number
  }


  export type Chocolate_batchMinAggregateInputType = {
    id?: true
    recipe_id?: true
    bean_origin?: true
    importer?: true
    production_date?: true
  }

  export type Chocolate_batchMaxAggregateInputType = {
    id?: true
    recipe_id?: true
    bean_origin?: true
    importer?: true
    production_date?: true
  }

  export type Chocolate_batchCountAggregateInputType = {
    id?: true
    recipe_id?: true
    bean_origin?: true
    importer?: true
    production_date?: true
    _all?: true
  }

  export type Chocolate_batchAggregateArgs = {
    /**
     * Filter which Chocolate_batch to aggregate.
     */
    where?: Chocolate_batchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chocolate_batches to fetch.
     */
    orderBy?: Enumerable<Chocolate_batchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Chocolate_batchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chocolate_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chocolate_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chocolate_batches
    **/
    _count?: true | Chocolate_batchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chocolate_batchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chocolate_batchMaxAggregateInputType
  }

  export type GetChocolate_batchAggregateType<T extends Chocolate_batchAggregateArgs> = {
        [P in keyof T & keyof AggregateChocolate_batch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChocolate_batch[P]>
      : GetScalarType<T[P], AggregateChocolate_batch[P]>
  }




  export type Chocolate_batchGroupByArgs = {
    where?: Chocolate_batchWhereInput
    orderBy?: Enumerable<Chocolate_batchOrderByWithAggregationInput>
    by: Chocolate_batchScalarFieldEnum[]
    having?: Chocolate_batchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chocolate_batchCountAggregateInputType | true
    _min?: Chocolate_batchMinAggregateInputType
    _max?: Chocolate_batchMaxAggregateInputType
  }


  export type Chocolate_batchGroupByOutputType = {
    id: string
    recipe_id: string | null
    bean_origin: string
    importer: string
    production_date: Date
    _count: Chocolate_batchCountAggregateOutputType | null
    _min: Chocolate_batchMinAggregateOutputType | null
    _max: Chocolate_batchMaxAggregateOutputType | null
  }

  type GetChocolate_batchGroupByPayload<T extends Chocolate_batchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Chocolate_batchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chocolate_batchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chocolate_batchGroupByOutputType[P]>
            : GetScalarType<T[P], Chocolate_batchGroupByOutputType[P]>
        }
      >
    >


  export type Chocolate_batchSelect = {
    id?: boolean
    recipe_id?: boolean
    bean_origin?: boolean
    importer?: boolean
    production_date?: boolean
    recipes?: boolean | RecipesArgs
    production_comments?: boolean | Chocolate_batch$production_commentsArgs
    _count?: boolean | Chocolate_batchCountOutputTypeArgs
  }


  export type Chocolate_batchInclude = {
    recipes?: boolean | RecipesArgs
    production_comments?: boolean | Chocolate_batch$production_commentsArgs
    _count?: boolean | Chocolate_batchCountOutputTypeArgs
  }

  export type Chocolate_batchGetPayload<S extends boolean | null | undefined | Chocolate_batchArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Chocolate_batch :
    S extends undefined ? never :
    S extends { include: any } & (Chocolate_batchArgs | Chocolate_batchFindManyArgs)
    ? Chocolate_batch  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'recipes' ? RecipesGetPayload<S['include'][P]> | null :
        P extends 'production_comments' ? Array < Production_commentsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Chocolate_batchCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Chocolate_batchArgs | Chocolate_batchFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'recipes' ? RecipesGetPayload<S['select'][P]> | null :
        P extends 'production_comments' ? Array < Production_commentsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Chocolate_batchCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Chocolate_batch ? Chocolate_batch[P] : never
  } 
      : Chocolate_batch


  type Chocolate_batchCountArgs = 
    Omit<Chocolate_batchFindManyArgs, 'select' | 'include'> & {
      select?: Chocolate_batchCountAggregateInputType | true
    }

  export interface Chocolate_batchDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Chocolate_batch that matches the filter.
     * @param {Chocolate_batchFindUniqueArgs} args - Arguments to find a Chocolate_batch
     * @example
     * // Get one Chocolate_batch
     * const chocolate_batch = await prisma.chocolate_batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Chocolate_batchFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Chocolate_batchFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Chocolate_batch'> extends True ? Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T>> : Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T> | null, null>

    /**
     * Find one Chocolate_batch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Chocolate_batchFindUniqueOrThrowArgs} args - Arguments to find a Chocolate_batch
     * @example
     * // Get one Chocolate_batch
     * const chocolate_batch = await prisma.chocolate_batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Chocolate_batchFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Chocolate_batchFindUniqueOrThrowArgs>
    ): Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T>>

    /**
     * Find the first Chocolate_batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chocolate_batchFindFirstArgs} args - Arguments to find a Chocolate_batch
     * @example
     * // Get one Chocolate_batch
     * const chocolate_batch = await prisma.chocolate_batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Chocolate_batchFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Chocolate_batchFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Chocolate_batch'> extends True ? Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T>> : Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T> | null, null>

    /**
     * Find the first Chocolate_batch that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chocolate_batchFindFirstOrThrowArgs} args - Arguments to find a Chocolate_batch
     * @example
     * // Get one Chocolate_batch
     * const chocolate_batch = await prisma.chocolate_batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Chocolate_batchFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Chocolate_batchFindFirstOrThrowArgs>
    ): Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T>>

    /**
     * Find zero or more Chocolate_batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chocolate_batchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chocolate_batches
     * const chocolate_batches = await prisma.chocolate_batch.findMany()
     * 
     * // Get first 10 Chocolate_batches
     * const chocolate_batches = await prisma.chocolate_batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chocolate_batchWithIdOnly = await prisma.chocolate_batch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Chocolate_batchFindManyArgs>(
      args?: SelectSubset<T, Chocolate_batchFindManyArgs>
    ): Prisma.PrismaPromise<Array<Chocolate_batchGetPayload<T>>>

    /**
     * Create a Chocolate_batch.
     * @param {Chocolate_batchCreateArgs} args - Arguments to create a Chocolate_batch.
     * @example
     * // Create one Chocolate_batch
     * const Chocolate_batch = await prisma.chocolate_batch.create({
     *   data: {
     *     // ... data to create a Chocolate_batch
     *   }
     * })
     * 
    **/
    create<T extends Chocolate_batchCreateArgs>(
      args: SelectSubset<T, Chocolate_batchCreateArgs>
    ): Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T>>

    /**
     * Create many Chocolate_batches.
     *     @param {Chocolate_batchCreateManyArgs} args - Arguments to create many Chocolate_batches.
     *     @example
     *     // Create many Chocolate_batches
     *     const chocolate_batch = await prisma.chocolate_batch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Chocolate_batchCreateManyArgs>(
      args?: SelectSubset<T, Chocolate_batchCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chocolate_batch.
     * @param {Chocolate_batchDeleteArgs} args - Arguments to delete one Chocolate_batch.
     * @example
     * // Delete one Chocolate_batch
     * const Chocolate_batch = await prisma.chocolate_batch.delete({
     *   where: {
     *     // ... filter to delete one Chocolate_batch
     *   }
     * })
     * 
    **/
    delete<T extends Chocolate_batchDeleteArgs>(
      args: SelectSubset<T, Chocolate_batchDeleteArgs>
    ): Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T>>

    /**
     * Update one Chocolate_batch.
     * @param {Chocolate_batchUpdateArgs} args - Arguments to update one Chocolate_batch.
     * @example
     * // Update one Chocolate_batch
     * const chocolate_batch = await prisma.chocolate_batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Chocolate_batchUpdateArgs>(
      args: SelectSubset<T, Chocolate_batchUpdateArgs>
    ): Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T>>

    /**
     * Delete zero or more Chocolate_batches.
     * @param {Chocolate_batchDeleteManyArgs} args - Arguments to filter Chocolate_batches to delete.
     * @example
     * // Delete a few Chocolate_batches
     * const { count } = await prisma.chocolate_batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Chocolate_batchDeleteManyArgs>(
      args?: SelectSubset<T, Chocolate_batchDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chocolate_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chocolate_batchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chocolate_batches
     * const chocolate_batch = await prisma.chocolate_batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Chocolate_batchUpdateManyArgs>(
      args: SelectSubset<T, Chocolate_batchUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chocolate_batch.
     * @param {Chocolate_batchUpsertArgs} args - Arguments to update or create a Chocolate_batch.
     * @example
     * // Update or create a Chocolate_batch
     * const chocolate_batch = await prisma.chocolate_batch.upsert({
     *   create: {
     *     // ... data to create a Chocolate_batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chocolate_batch we want to update
     *   }
     * })
    **/
    upsert<T extends Chocolate_batchUpsertArgs>(
      args: SelectSubset<T, Chocolate_batchUpsertArgs>
    ): Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T>>

    /**
     * Count the number of Chocolate_batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chocolate_batchCountArgs} args - Arguments to filter Chocolate_batches to count.
     * @example
     * // Count the number of Chocolate_batches
     * const count = await prisma.chocolate_batch.count({
     *   where: {
     *     // ... the filter for the Chocolate_batches we want to count
     *   }
     * })
    **/
    count<T extends Chocolate_batchCountArgs>(
      args?: Subset<T, Chocolate_batchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chocolate_batchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chocolate_batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chocolate_batchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chocolate_batchAggregateArgs>(args: Subset<T, Chocolate_batchAggregateArgs>): Prisma.PrismaPromise<GetChocolate_batchAggregateType<T>>

    /**
     * Group by Chocolate_batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chocolate_batchGroupByArgs} args - Group by arguments.
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
      T extends Chocolate_batchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Chocolate_batchGroupByArgs['orderBy'] }
        : { orderBy?: Chocolate_batchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Chocolate_batchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChocolate_batchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Chocolate_batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Chocolate_batchClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    recipes<T extends RecipesArgs= {}>(args?: Subset<T, RecipesArgs>): Prisma__RecipesClient<RecipesGetPayload<T> | Null>;

    production_comments<T extends Chocolate_batch$production_commentsArgs= {}>(args?: Subset<T, Chocolate_batch$production_commentsArgs>): Prisma.PrismaPromise<Array<Production_commentsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Chocolate_batch base type for findUnique actions
   */
  export type Chocolate_batchFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * Filter, which Chocolate_batch to fetch.
     */
    where: Chocolate_batchWhereUniqueInput
  }

  /**
   * Chocolate_batch findUnique
   */
  export interface Chocolate_batchFindUniqueArgs extends Chocolate_batchFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chocolate_batch findUniqueOrThrow
   */
  export type Chocolate_batchFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * Filter, which Chocolate_batch to fetch.
     */
    where: Chocolate_batchWhereUniqueInput
  }


  /**
   * Chocolate_batch base type for findFirst actions
   */
  export type Chocolate_batchFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * Filter, which Chocolate_batch to fetch.
     */
    where?: Chocolate_batchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chocolate_batches to fetch.
     */
    orderBy?: Enumerable<Chocolate_batchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chocolate_batches.
     */
    cursor?: Chocolate_batchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chocolate_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chocolate_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chocolate_batches.
     */
    distinct?: Enumerable<Chocolate_batchScalarFieldEnum>
  }

  /**
   * Chocolate_batch findFirst
   */
  export interface Chocolate_batchFindFirstArgs extends Chocolate_batchFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chocolate_batch findFirstOrThrow
   */
  export type Chocolate_batchFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * Filter, which Chocolate_batch to fetch.
     */
    where?: Chocolate_batchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chocolate_batches to fetch.
     */
    orderBy?: Enumerable<Chocolate_batchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chocolate_batches.
     */
    cursor?: Chocolate_batchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chocolate_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chocolate_batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chocolate_batches.
     */
    distinct?: Enumerable<Chocolate_batchScalarFieldEnum>
  }


  /**
   * Chocolate_batch findMany
   */
  export type Chocolate_batchFindManyArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * Filter, which Chocolate_batches to fetch.
     */
    where?: Chocolate_batchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chocolate_batches to fetch.
     */
    orderBy?: Enumerable<Chocolate_batchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chocolate_batches.
     */
    cursor?: Chocolate_batchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chocolate_batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chocolate_batches.
     */
    skip?: number
    distinct?: Enumerable<Chocolate_batchScalarFieldEnum>
  }


  /**
   * Chocolate_batch create
   */
  export type Chocolate_batchCreateArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * The data needed to create a Chocolate_batch.
     */
    data: XOR<Chocolate_batchCreateInput, Chocolate_batchUncheckedCreateInput>
  }


  /**
   * Chocolate_batch createMany
   */
  export type Chocolate_batchCreateManyArgs = {
    /**
     * The data used to create many Chocolate_batches.
     */
    data: Enumerable<Chocolate_batchCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Chocolate_batch update
   */
  export type Chocolate_batchUpdateArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * The data needed to update a Chocolate_batch.
     */
    data: XOR<Chocolate_batchUpdateInput, Chocolate_batchUncheckedUpdateInput>
    /**
     * Choose, which Chocolate_batch to update.
     */
    where: Chocolate_batchWhereUniqueInput
  }


  /**
   * Chocolate_batch updateMany
   */
  export type Chocolate_batchUpdateManyArgs = {
    /**
     * The data used to update Chocolate_batches.
     */
    data: XOR<Chocolate_batchUpdateManyMutationInput, Chocolate_batchUncheckedUpdateManyInput>
    /**
     * Filter which Chocolate_batches to update
     */
    where?: Chocolate_batchWhereInput
  }


  /**
   * Chocolate_batch upsert
   */
  export type Chocolate_batchUpsertArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * The filter to search for the Chocolate_batch to update in case it exists.
     */
    where: Chocolate_batchWhereUniqueInput
    /**
     * In case the Chocolate_batch found by the `where` argument doesn't exist, create a new Chocolate_batch with this data.
     */
    create: XOR<Chocolate_batchCreateInput, Chocolate_batchUncheckedCreateInput>
    /**
     * In case the Chocolate_batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Chocolate_batchUpdateInput, Chocolate_batchUncheckedUpdateInput>
  }


  /**
   * Chocolate_batch delete
   */
  export type Chocolate_batchDeleteArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    /**
     * Filter which Chocolate_batch to delete.
     */
    where: Chocolate_batchWhereUniqueInput
  }


  /**
   * Chocolate_batch deleteMany
   */
  export type Chocolate_batchDeleteManyArgs = {
    /**
     * Filter which Chocolate_batches to delete
     */
    where?: Chocolate_batchWhereInput
  }


  /**
   * Chocolate_batch.production_comments
   */
  export type Chocolate_batch$production_commentsArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    where?: Production_commentsWhereInput
    orderBy?: Enumerable<Production_commentsOrderByWithRelationInput>
    cursor?: Production_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Production_commentsScalarFieldEnum>
  }


  /**
   * Chocolate_batch without action
   */
  export type Chocolate_batchArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
  }



  /**
   * Model Production_comments
   */


  export type AggregateProduction_comments = {
    _count: Production_commentsCountAggregateOutputType | null
    _min: Production_commentsMinAggregateOutputType | null
    _max: Production_commentsMaxAggregateOutputType | null
  }

  export type Production_commentsMinAggregateOutputType = {
    id: string | null
    batch_id: string | null
    user_name: string | null
    comment_timestamp: Date | null
    comment_text: string | null
    attachment_path: string | null
  }

  export type Production_commentsMaxAggregateOutputType = {
    id: string | null
    batch_id: string | null
    user_name: string | null
    comment_timestamp: Date | null
    comment_text: string | null
    attachment_path: string | null
  }

  export type Production_commentsCountAggregateOutputType = {
    id: number
    batch_id: number
    user_name: number
    comment_timestamp: number
    comment_text: number
    attachment_path: number
    _all: number
  }


  export type Production_commentsMinAggregateInputType = {
    id?: true
    batch_id?: true
    user_name?: true
    comment_timestamp?: true
    comment_text?: true
    attachment_path?: true
  }

  export type Production_commentsMaxAggregateInputType = {
    id?: true
    batch_id?: true
    user_name?: true
    comment_timestamp?: true
    comment_text?: true
    attachment_path?: true
  }

  export type Production_commentsCountAggregateInputType = {
    id?: true
    batch_id?: true
    user_name?: true
    comment_timestamp?: true
    comment_text?: true
    attachment_path?: true
    _all?: true
  }

  export type Production_commentsAggregateArgs = {
    /**
     * Filter which Production_comments to aggregate.
     */
    where?: Production_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Production_comments to fetch.
     */
    orderBy?: Enumerable<Production_commentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Production_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Production_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Production_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Production_comments
    **/
    _count?: true | Production_commentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Production_commentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Production_commentsMaxAggregateInputType
  }

  export type GetProduction_commentsAggregateType<T extends Production_commentsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduction_comments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduction_comments[P]>
      : GetScalarType<T[P], AggregateProduction_comments[P]>
  }




  export type Production_commentsGroupByArgs = {
    where?: Production_commentsWhereInput
    orderBy?: Enumerable<Production_commentsOrderByWithAggregationInput>
    by: Production_commentsScalarFieldEnum[]
    having?: Production_commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Production_commentsCountAggregateInputType | true
    _min?: Production_commentsMinAggregateInputType
    _max?: Production_commentsMaxAggregateInputType
  }


  export type Production_commentsGroupByOutputType = {
    id: string
    batch_id: string | null
    user_name: string
    comment_timestamp: Date | null
    comment_text: string
    attachment_path: string | null
    _count: Production_commentsCountAggregateOutputType | null
    _min: Production_commentsMinAggregateOutputType | null
    _max: Production_commentsMaxAggregateOutputType | null
  }

  type GetProduction_commentsGroupByPayload<T extends Production_commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Production_commentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Production_commentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Production_commentsGroupByOutputType[P]>
            : GetScalarType<T[P], Production_commentsGroupByOutputType[P]>
        }
      >
    >


  export type Production_commentsSelect = {
    id?: boolean
    batch_id?: boolean
    user_name?: boolean
    comment_timestamp?: boolean
    comment_text?: boolean
    attachment_path?: boolean
    chocolate_batch?: boolean | Chocolate_batchArgs
  }


  export type Production_commentsInclude = {
    chocolate_batch?: boolean | Chocolate_batchArgs
  }

  export type Production_commentsGetPayload<S extends boolean | null | undefined | Production_commentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Production_comments :
    S extends undefined ? never :
    S extends { include: any } & (Production_commentsArgs | Production_commentsFindManyArgs)
    ? Production_comments  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'chocolate_batch' ? Chocolate_batchGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (Production_commentsArgs | Production_commentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'chocolate_batch' ? Chocolate_batchGetPayload<S['select'][P]> | null :  P extends keyof Production_comments ? Production_comments[P] : never
  } 
      : Production_comments


  type Production_commentsCountArgs = 
    Omit<Production_commentsFindManyArgs, 'select' | 'include'> & {
      select?: Production_commentsCountAggregateInputType | true
    }

  export interface Production_commentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Production_comments that matches the filter.
     * @param {Production_commentsFindUniqueArgs} args - Arguments to find a Production_comments
     * @example
     * // Get one Production_comments
     * const production_comments = await prisma.production_comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Production_commentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Production_commentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Production_comments'> extends True ? Prisma__Production_commentsClient<Production_commentsGetPayload<T>> : Prisma__Production_commentsClient<Production_commentsGetPayload<T> | null, null>

    /**
     * Find one Production_comments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Production_commentsFindUniqueOrThrowArgs} args - Arguments to find a Production_comments
     * @example
     * // Get one Production_comments
     * const production_comments = await prisma.production_comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Production_commentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Production_commentsFindUniqueOrThrowArgs>
    ): Prisma__Production_commentsClient<Production_commentsGetPayload<T>>

    /**
     * Find the first Production_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_commentsFindFirstArgs} args - Arguments to find a Production_comments
     * @example
     * // Get one Production_comments
     * const production_comments = await prisma.production_comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Production_commentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Production_commentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Production_comments'> extends True ? Prisma__Production_commentsClient<Production_commentsGetPayload<T>> : Prisma__Production_commentsClient<Production_commentsGetPayload<T> | null, null>

    /**
     * Find the first Production_comments that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_commentsFindFirstOrThrowArgs} args - Arguments to find a Production_comments
     * @example
     * // Get one Production_comments
     * const production_comments = await prisma.production_comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Production_commentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Production_commentsFindFirstOrThrowArgs>
    ): Prisma__Production_commentsClient<Production_commentsGetPayload<T>>

    /**
     * Find zero or more Production_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_commentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Production_comments
     * const production_comments = await prisma.production_comments.findMany()
     * 
     * // Get first 10 Production_comments
     * const production_comments = await prisma.production_comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const production_commentsWithIdOnly = await prisma.production_comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Production_commentsFindManyArgs>(
      args?: SelectSubset<T, Production_commentsFindManyArgs>
    ): Prisma.PrismaPromise<Array<Production_commentsGetPayload<T>>>

    /**
     * Create a Production_comments.
     * @param {Production_commentsCreateArgs} args - Arguments to create a Production_comments.
     * @example
     * // Create one Production_comments
     * const Production_comments = await prisma.production_comments.create({
     *   data: {
     *     // ... data to create a Production_comments
     *   }
     * })
     * 
    **/
    create<T extends Production_commentsCreateArgs>(
      args: SelectSubset<T, Production_commentsCreateArgs>
    ): Prisma__Production_commentsClient<Production_commentsGetPayload<T>>

    /**
     * Create many Production_comments.
     *     @param {Production_commentsCreateManyArgs} args - Arguments to create many Production_comments.
     *     @example
     *     // Create many Production_comments
     *     const production_comments = await prisma.production_comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Production_commentsCreateManyArgs>(
      args?: SelectSubset<T, Production_commentsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Production_comments.
     * @param {Production_commentsDeleteArgs} args - Arguments to delete one Production_comments.
     * @example
     * // Delete one Production_comments
     * const Production_comments = await prisma.production_comments.delete({
     *   where: {
     *     // ... filter to delete one Production_comments
     *   }
     * })
     * 
    **/
    delete<T extends Production_commentsDeleteArgs>(
      args: SelectSubset<T, Production_commentsDeleteArgs>
    ): Prisma__Production_commentsClient<Production_commentsGetPayload<T>>

    /**
     * Update one Production_comments.
     * @param {Production_commentsUpdateArgs} args - Arguments to update one Production_comments.
     * @example
     * // Update one Production_comments
     * const production_comments = await prisma.production_comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Production_commentsUpdateArgs>(
      args: SelectSubset<T, Production_commentsUpdateArgs>
    ): Prisma__Production_commentsClient<Production_commentsGetPayload<T>>

    /**
     * Delete zero or more Production_comments.
     * @param {Production_commentsDeleteManyArgs} args - Arguments to filter Production_comments to delete.
     * @example
     * // Delete a few Production_comments
     * const { count } = await prisma.production_comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Production_commentsDeleteManyArgs>(
      args?: SelectSubset<T, Production_commentsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Production_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Production_comments
     * const production_comments = await prisma.production_comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Production_commentsUpdateManyArgs>(
      args: SelectSubset<T, Production_commentsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Production_comments.
     * @param {Production_commentsUpsertArgs} args - Arguments to update or create a Production_comments.
     * @example
     * // Update or create a Production_comments
     * const production_comments = await prisma.production_comments.upsert({
     *   create: {
     *     // ... data to create a Production_comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Production_comments we want to update
     *   }
     * })
    **/
    upsert<T extends Production_commentsUpsertArgs>(
      args: SelectSubset<T, Production_commentsUpsertArgs>
    ): Prisma__Production_commentsClient<Production_commentsGetPayload<T>>

    /**
     * Count the number of Production_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_commentsCountArgs} args - Arguments to filter Production_comments to count.
     * @example
     * // Count the number of Production_comments
     * const count = await prisma.production_comments.count({
     *   where: {
     *     // ... the filter for the Production_comments we want to count
     *   }
     * })
    **/
    count<T extends Production_commentsCountArgs>(
      args?: Subset<T, Production_commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Production_commentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Production_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_commentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Production_commentsAggregateArgs>(args: Subset<T, Production_commentsAggregateArgs>): Prisma.PrismaPromise<GetProduction_commentsAggregateType<T>>

    /**
     * Group by Production_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Production_commentsGroupByArgs} args - Group by arguments.
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
      T extends Production_commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Production_commentsGroupByArgs['orderBy'] }
        : { orderBy?: Production_commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Production_commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduction_commentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Production_comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Production_commentsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    chocolate_batch<T extends Chocolate_batchArgs= {}>(args?: Subset<T, Chocolate_batchArgs>): Prisma__Chocolate_batchClient<Chocolate_batchGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Production_comments base type for findUnique actions
   */
  export type Production_commentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * Filter, which Production_comments to fetch.
     */
    where: Production_commentsWhereUniqueInput
  }

  /**
   * Production_comments findUnique
   */
  export interface Production_commentsFindUniqueArgs extends Production_commentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Production_comments findUniqueOrThrow
   */
  export type Production_commentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * Filter, which Production_comments to fetch.
     */
    where: Production_commentsWhereUniqueInput
  }


  /**
   * Production_comments base type for findFirst actions
   */
  export type Production_commentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * Filter, which Production_comments to fetch.
     */
    where?: Production_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Production_comments to fetch.
     */
    orderBy?: Enumerable<Production_commentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Production_comments.
     */
    cursor?: Production_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Production_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Production_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Production_comments.
     */
    distinct?: Enumerable<Production_commentsScalarFieldEnum>
  }

  /**
   * Production_comments findFirst
   */
  export interface Production_commentsFindFirstArgs extends Production_commentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Production_comments findFirstOrThrow
   */
  export type Production_commentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * Filter, which Production_comments to fetch.
     */
    where?: Production_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Production_comments to fetch.
     */
    orderBy?: Enumerable<Production_commentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Production_comments.
     */
    cursor?: Production_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Production_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Production_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Production_comments.
     */
    distinct?: Enumerable<Production_commentsScalarFieldEnum>
  }


  /**
   * Production_comments findMany
   */
  export type Production_commentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * Filter, which Production_comments to fetch.
     */
    where?: Production_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Production_comments to fetch.
     */
    orderBy?: Enumerable<Production_commentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Production_comments.
     */
    cursor?: Production_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Production_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Production_comments.
     */
    skip?: number
    distinct?: Enumerable<Production_commentsScalarFieldEnum>
  }


  /**
   * Production_comments create
   */
  export type Production_commentsCreateArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * The data needed to create a Production_comments.
     */
    data: XOR<Production_commentsCreateInput, Production_commentsUncheckedCreateInput>
  }


  /**
   * Production_comments createMany
   */
  export type Production_commentsCreateManyArgs = {
    /**
     * The data used to create many Production_comments.
     */
    data: Enumerable<Production_commentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Production_comments update
   */
  export type Production_commentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * The data needed to update a Production_comments.
     */
    data: XOR<Production_commentsUpdateInput, Production_commentsUncheckedUpdateInput>
    /**
     * Choose, which Production_comments to update.
     */
    where: Production_commentsWhereUniqueInput
  }


  /**
   * Production_comments updateMany
   */
  export type Production_commentsUpdateManyArgs = {
    /**
     * The data used to update Production_comments.
     */
    data: XOR<Production_commentsUpdateManyMutationInput, Production_commentsUncheckedUpdateManyInput>
    /**
     * Filter which Production_comments to update
     */
    where?: Production_commentsWhereInput
  }


  /**
   * Production_comments upsert
   */
  export type Production_commentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * The filter to search for the Production_comments to update in case it exists.
     */
    where: Production_commentsWhereUniqueInput
    /**
     * In case the Production_comments found by the `where` argument doesn't exist, create a new Production_comments with this data.
     */
    create: XOR<Production_commentsCreateInput, Production_commentsUncheckedCreateInput>
    /**
     * In case the Production_comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Production_commentsUpdateInput, Production_commentsUncheckedUpdateInput>
  }


  /**
   * Production_comments delete
   */
  export type Production_commentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
    /**
     * Filter which Production_comments to delete.
     */
    where: Production_commentsWhereUniqueInput
  }


  /**
   * Production_comments deleteMany
   */
  export type Production_commentsDeleteManyArgs = {
    /**
     * Filter which Production_comments to delete
     */
    where?: Production_commentsWhereInput
  }


  /**
   * Production_comments without action
   */
  export type Production_commentsArgs = {
    /**
     * Select specific fields to fetch from the Production_comments
     */
    select?: Production_commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Production_commentsInclude | null
  }



  /**
   * Model Recipe_ingredients
   */


  export type AggregateRecipe_ingredients = {
    _count: Recipe_ingredientsCountAggregateOutputType | null
    _avg: Recipe_ingredientsAvgAggregateOutputType | null
    _sum: Recipe_ingredientsSumAggregateOutputType | null
    _min: Recipe_ingredientsMinAggregateOutputType | null
    _max: Recipe_ingredientsMaxAggregateOutputType | null
  }

  export type Recipe_ingredientsAvgAggregateOutputType = {
    percentage: number | null
  }

  export type Recipe_ingredientsSumAggregateOutputType = {
    percentage: number | null
  }

  export type Recipe_ingredientsMinAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    name: string | null
    percentage: number | null
  }

  export type Recipe_ingredientsMaxAggregateOutputType = {
    id: string | null
    recipe_id: string | null
    name: string | null
    percentage: number | null
  }

  export type Recipe_ingredientsCountAggregateOutputType = {
    id: number
    recipe_id: number
    name: number
    percentage: number
    _all: number
  }


  export type Recipe_ingredientsAvgAggregateInputType = {
    percentage?: true
  }

  export type Recipe_ingredientsSumAggregateInputType = {
    percentage?: true
  }

  export type Recipe_ingredientsMinAggregateInputType = {
    id?: true
    recipe_id?: true
    name?: true
    percentage?: true
  }

  export type Recipe_ingredientsMaxAggregateInputType = {
    id?: true
    recipe_id?: true
    name?: true
    percentage?: true
  }

  export type Recipe_ingredientsCountAggregateInputType = {
    id?: true
    recipe_id?: true
    name?: true
    percentage?: true
    _all?: true
  }

  export type Recipe_ingredientsAggregateArgs = {
    /**
     * Filter which Recipe_ingredients to aggregate.
     */
    where?: Recipe_ingredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_ingredients to fetch.
     */
    orderBy?: Enumerable<Recipe_ingredientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Recipe_ingredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipe_ingredients
    **/
    _count?: true | Recipe_ingredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recipe_ingredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recipe_ingredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recipe_ingredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recipe_ingredientsMaxAggregateInputType
  }

  export type GetRecipe_ingredientsAggregateType<T extends Recipe_ingredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe_ingredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe_ingredients[P]>
      : GetScalarType<T[P], AggregateRecipe_ingredients[P]>
  }




  export type Recipe_ingredientsGroupByArgs = {
    where?: Recipe_ingredientsWhereInput
    orderBy?: Enumerable<Recipe_ingredientsOrderByWithAggregationInput>
    by: Recipe_ingredientsScalarFieldEnum[]
    having?: Recipe_ingredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recipe_ingredientsCountAggregateInputType | true
    _avg?: Recipe_ingredientsAvgAggregateInputType
    _sum?: Recipe_ingredientsSumAggregateInputType
    _min?: Recipe_ingredientsMinAggregateInputType
    _max?: Recipe_ingredientsMaxAggregateInputType
  }


  export type Recipe_ingredientsGroupByOutputType = {
    id: string
    recipe_id: string | null
    name: string
    percentage: number
    _count: Recipe_ingredientsCountAggregateOutputType | null
    _avg: Recipe_ingredientsAvgAggregateOutputType | null
    _sum: Recipe_ingredientsSumAggregateOutputType | null
    _min: Recipe_ingredientsMinAggregateOutputType | null
    _max: Recipe_ingredientsMaxAggregateOutputType | null
  }

  type GetRecipe_ingredientsGroupByPayload<T extends Recipe_ingredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Recipe_ingredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recipe_ingredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recipe_ingredientsGroupByOutputType[P]>
            : GetScalarType<T[P], Recipe_ingredientsGroupByOutputType[P]>
        }
      >
    >


  export type Recipe_ingredientsSelect = {
    id?: boolean
    recipe_id?: boolean
    name?: boolean
    percentage?: boolean
    recipes?: boolean | RecipesArgs
  }


  export type Recipe_ingredientsInclude = {
    recipes?: boolean | RecipesArgs
  }

  export type Recipe_ingredientsGetPayload<S extends boolean | null | undefined | Recipe_ingredientsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Recipe_ingredients :
    S extends undefined ? never :
    S extends { include: any } & (Recipe_ingredientsArgs | Recipe_ingredientsFindManyArgs)
    ? Recipe_ingredients  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'recipes' ? RecipesGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (Recipe_ingredientsArgs | Recipe_ingredientsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'recipes' ? RecipesGetPayload<S['select'][P]> | null :  P extends keyof Recipe_ingredients ? Recipe_ingredients[P] : never
  } 
      : Recipe_ingredients


  type Recipe_ingredientsCountArgs = 
    Omit<Recipe_ingredientsFindManyArgs, 'select' | 'include'> & {
      select?: Recipe_ingredientsCountAggregateInputType | true
    }

  export interface Recipe_ingredientsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Recipe_ingredients that matches the filter.
     * @param {Recipe_ingredientsFindUniqueArgs} args - Arguments to find a Recipe_ingredients
     * @example
     * // Get one Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Recipe_ingredientsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Recipe_ingredientsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Recipe_ingredients'> extends True ? Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T>> : Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T> | null, null>

    /**
     * Find one Recipe_ingredients that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Recipe_ingredientsFindUniqueOrThrowArgs} args - Arguments to find a Recipe_ingredients
     * @example
     * // Get one Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Recipe_ingredientsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Recipe_ingredientsFindUniqueOrThrowArgs>
    ): Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T>>

    /**
     * Find the first Recipe_ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_ingredientsFindFirstArgs} args - Arguments to find a Recipe_ingredients
     * @example
     * // Get one Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Recipe_ingredientsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Recipe_ingredientsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Recipe_ingredients'> extends True ? Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T>> : Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T> | null, null>

    /**
     * Find the first Recipe_ingredients that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_ingredientsFindFirstOrThrowArgs} args - Arguments to find a Recipe_ingredients
     * @example
     * // Get one Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Recipe_ingredientsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Recipe_ingredientsFindFirstOrThrowArgs>
    ): Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T>>

    /**
     * Find zero or more Recipe_ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_ingredientsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.findMany()
     * 
     * // Get first 10 Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipe_ingredientsWithIdOnly = await prisma.recipe_ingredients.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Recipe_ingredientsFindManyArgs>(
      args?: SelectSubset<T, Recipe_ingredientsFindManyArgs>
    ): Prisma.PrismaPromise<Array<Recipe_ingredientsGetPayload<T>>>

    /**
     * Create a Recipe_ingredients.
     * @param {Recipe_ingredientsCreateArgs} args - Arguments to create a Recipe_ingredients.
     * @example
     * // Create one Recipe_ingredients
     * const Recipe_ingredients = await prisma.recipe_ingredients.create({
     *   data: {
     *     // ... data to create a Recipe_ingredients
     *   }
     * })
     * 
    **/
    create<T extends Recipe_ingredientsCreateArgs>(
      args: SelectSubset<T, Recipe_ingredientsCreateArgs>
    ): Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T>>

    /**
     * Create many Recipe_ingredients.
     *     @param {Recipe_ingredientsCreateManyArgs} args - Arguments to create many Recipe_ingredients.
     *     @example
     *     // Create many Recipe_ingredients
     *     const recipe_ingredients = await prisma.recipe_ingredients.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Recipe_ingredientsCreateManyArgs>(
      args?: SelectSubset<T, Recipe_ingredientsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipe_ingredients.
     * @param {Recipe_ingredientsDeleteArgs} args - Arguments to delete one Recipe_ingredients.
     * @example
     * // Delete one Recipe_ingredients
     * const Recipe_ingredients = await prisma.recipe_ingredients.delete({
     *   where: {
     *     // ... filter to delete one Recipe_ingredients
     *   }
     * })
     * 
    **/
    delete<T extends Recipe_ingredientsDeleteArgs>(
      args: SelectSubset<T, Recipe_ingredientsDeleteArgs>
    ): Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T>>

    /**
     * Update one Recipe_ingredients.
     * @param {Recipe_ingredientsUpdateArgs} args - Arguments to update one Recipe_ingredients.
     * @example
     * // Update one Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Recipe_ingredientsUpdateArgs>(
      args: SelectSubset<T, Recipe_ingredientsUpdateArgs>
    ): Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T>>

    /**
     * Delete zero or more Recipe_ingredients.
     * @param {Recipe_ingredientsDeleteManyArgs} args - Arguments to filter Recipe_ingredients to delete.
     * @example
     * // Delete a few Recipe_ingredients
     * const { count } = await prisma.recipe_ingredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Recipe_ingredientsDeleteManyArgs>(
      args?: SelectSubset<T, Recipe_ingredientsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_ingredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Recipe_ingredientsUpdateManyArgs>(
      args: SelectSubset<T, Recipe_ingredientsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe_ingredients.
     * @param {Recipe_ingredientsUpsertArgs} args - Arguments to update or create a Recipe_ingredients.
     * @example
     * // Update or create a Recipe_ingredients
     * const recipe_ingredients = await prisma.recipe_ingredients.upsert({
     *   create: {
     *     // ... data to create a Recipe_ingredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe_ingredients we want to update
     *   }
     * })
    **/
    upsert<T extends Recipe_ingredientsUpsertArgs>(
      args: SelectSubset<T, Recipe_ingredientsUpsertArgs>
    ): Prisma__Recipe_ingredientsClient<Recipe_ingredientsGetPayload<T>>

    /**
     * Count the number of Recipe_ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_ingredientsCountArgs} args - Arguments to filter Recipe_ingredients to count.
     * @example
     * // Count the number of Recipe_ingredients
     * const count = await prisma.recipe_ingredients.count({
     *   where: {
     *     // ... the filter for the Recipe_ingredients we want to count
     *   }
     * })
    **/
    count<T extends Recipe_ingredientsCountArgs>(
      args?: Subset<T, Recipe_ingredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recipe_ingredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe_ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_ingredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Recipe_ingredientsAggregateArgs>(args: Subset<T, Recipe_ingredientsAggregateArgs>): Prisma.PrismaPromise<GetRecipe_ingredientsAggregateType<T>>

    /**
     * Group by Recipe_ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_ingredientsGroupByArgs} args - Group by arguments.
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
      T extends Recipe_ingredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Recipe_ingredientsGroupByArgs['orderBy'] }
        : { orderBy?: Recipe_ingredientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Recipe_ingredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipe_ingredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe_ingredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Recipe_ingredientsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    recipes<T extends RecipesArgs= {}>(args?: Subset<T, RecipesArgs>): Prisma__RecipesClient<RecipesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Recipe_ingredients base type for findUnique actions
   */
  export type Recipe_ingredientsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * Filter, which Recipe_ingredients to fetch.
     */
    where: Recipe_ingredientsWhereUniqueInput
  }

  /**
   * Recipe_ingredients findUnique
   */
  export interface Recipe_ingredientsFindUniqueArgs extends Recipe_ingredientsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recipe_ingredients findUniqueOrThrow
   */
  export type Recipe_ingredientsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * Filter, which Recipe_ingredients to fetch.
     */
    where: Recipe_ingredientsWhereUniqueInput
  }


  /**
   * Recipe_ingredients base type for findFirst actions
   */
  export type Recipe_ingredientsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * Filter, which Recipe_ingredients to fetch.
     */
    where?: Recipe_ingredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_ingredients to fetch.
     */
    orderBy?: Enumerable<Recipe_ingredientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_ingredients.
     */
    cursor?: Recipe_ingredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_ingredients.
     */
    distinct?: Enumerable<Recipe_ingredientsScalarFieldEnum>
  }

  /**
   * Recipe_ingredients findFirst
   */
  export interface Recipe_ingredientsFindFirstArgs extends Recipe_ingredientsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recipe_ingredients findFirstOrThrow
   */
  export type Recipe_ingredientsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * Filter, which Recipe_ingredients to fetch.
     */
    where?: Recipe_ingredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_ingredients to fetch.
     */
    orderBy?: Enumerable<Recipe_ingredientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_ingredients.
     */
    cursor?: Recipe_ingredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_ingredients.
     */
    distinct?: Enumerable<Recipe_ingredientsScalarFieldEnum>
  }


  /**
   * Recipe_ingredients findMany
   */
  export type Recipe_ingredientsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * Filter, which Recipe_ingredients to fetch.
     */
    where?: Recipe_ingredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_ingredients to fetch.
     */
    orderBy?: Enumerable<Recipe_ingredientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipe_ingredients.
     */
    cursor?: Recipe_ingredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_ingredients.
     */
    skip?: number
    distinct?: Enumerable<Recipe_ingredientsScalarFieldEnum>
  }


  /**
   * Recipe_ingredients create
   */
  export type Recipe_ingredientsCreateArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * The data needed to create a Recipe_ingredients.
     */
    data: XOR<Recipe_ingredientsCreateInput, Recipe_ingredientsUncheckedCreateInput>
  }


  /**
   * Recipe_ingredients createMany
   */
  export type Recipe_ingredientsCreateManyArgs = {
    /**
     * The data used to create many Recipe_ingredients.
     */
    data: Enumerable<Recipe_ingredientsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Recipe_ingredients update
   */
  export type Recipe_ingredientsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * The data needed to update a Recipe_ingredients.
     */
    data: XOR<Recipe_ingredientsUpdateInput, Recipe_ingredientsUncheckedUpdateInput>
    /**
     * Choose, which Recipe_ingredients to update.
     */
    where: Recipe_ingredientsWhereUniqueInput
  }


  /**
   * Recipe_ingredients updateMany
   */
  export type Recipe_ingredientsUpdateManyArgs = {
    /**
     * The data used to update Recipe_ingredients.
     */
    data: XOR<Recipe_ingredientsUpdateManyMutationInput, Recipe_ingredientsUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_ingredients to update
     */
    where?: Recipe_ingredientsWhereInput
  }


  /**
   * Recipe_ingredients upsert
   */
  export type Recipe_ingredientsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * The filter to search for the Recipe_ingredients to update in case it exists.
     */
    where: Recipe_ingredientsWhereUniqueInput
    /**
     * In case the Recipe_ingredients found by the `where` argument doesn't exist, create a new Recipe_ingredients with this data.
     */
    create: XOR<Recipe_ingredientsCreateInput, Recipe_ingredientsUncheckedCreateInput>
    /**
     * In case the Recipe_ingredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Recipe_ingredientsUpdateInput, Recipe_ingredientsUncheckedUpdateInput>
  }


  /**
   * Recipe_ingredients delete
   */
  export type Recipe_ingredientsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    /**
     * Filter which Recipe_ingredients to delete.
     */
    where: Recipe_ingredientsWhereUniqueInput
  }


  /**
   * Recipe_ingredients deleteMany
   */
  export type Recipe_ingredientsDeleteManyArgs = {
    /**
     * Filter which Recipe_ingredients to delete
     */
    where?: Recipe_ingredientsWhereInput
  }


  /**
   * Recipe_ingredients without action
   */
  export type Recipe_ingredientsArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
  }



  /**
   * Model Recipes
   */


  export type AggregateRecipes = {
    _count: RecipesCountAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  export type RecipesMinAggregateOutputType = {
    id: string | null
    description: string | null
    name: string | null
  }

  export type RecipesMaxAggregateOutputType = {
    id: string | null
    description: string | null
    name: string | null
  }

  export type RecipesCountAggregateOutputType = {
    id: number
    description: number
    name: number
    _all: number
  }


  export type RecipesMinAggregateInputType = {
    id?: true
    description?: true
    name?: true
  }

  export type RecipesMaxAggregateInputType = {
    id?: true
    description?: true
    name?: true
  }

  export type RecipesCountAggregateInputType = {
    id?: true
    description?: true
    name?: true
    _all?: true
  }

  export type RecipesAggregateArgs = {
    /**
     * Filter which Recipes to aggregate.
     */
    where?: RecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Enumerable<RecipesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipesMaxAggregateInputType
  }

  export type GetRecipesAggregateType<T extends RecipesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipes[P]>
      : GetScalarType<T[P], AggregateRecipes[P]>
  }




  export type RecipesGroupByArgs = {
    where?: RecipesWhereInput
    orderBy?: Enumerable<RecipesOrderByWithAggregationInput>
    by: RecipesScalarFieldEnum[]
    having?: RecipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipesCountAggregateInputType | true
    _min?: RecipesMinAggregateInputType
    _max?: RecipesMaxAggregateInputType
  }


  export type RecipesGroupByOutputType = {
    id: string
    description: string
    name: string
    _count: RecipesCountAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  type GetRecipesGroupByPayload<T extends RecipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RecipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipesGroupByOutputType[P]>
            : GetScalarType<T[P], RecipesGroupByOutputType[P]>
        }
      >
    >


  export type RecipesSelect = {
    id?: boolean
    description?: boolean
    name?: boolean
    chocolate_batch?: boolean | Recipes$chocolate_batchArgs
    recipe_ingredients?: boolean | Recipes$recipe_ingredientsArgs
    _count?: boolean | RecipesCountOutputTypeArgs
  }


  export type RecipesInclude = {
    chocolate_batch?: boolean | Recipes$chocolate_batchArgs
    recipe_ingredients?: boolean | Recipes$recipe_ingredientsArgs
    _count?: boolean | RecipesCountOutputTypeArgs
  }

  export type RecipesGetPayload<S extends boolean | null | undefined | RecipesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Recipes :
    S extends undefined ? never :
    S extends { include: any } & (RecipesArgs | RecipesFindManyArgs)
    ? Recipes  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'chocolate_batch' ? Array < Chocolate_batchGetPayload<S['include'][P]>>  :
        P extends 'recipe_ingredients' ? Array < Recipe_ingredientsGetPayload<S['include'][P]>>  :
        P extends '_count' ? RecipesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RecipesArgs | RecipesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'chocolate_batch' ? Array < Chocolate_batchGetPayload<S['select'][P]>>  :
        P extends 'recipe_ingredients' ? Array < Recipe_ingredientsGetPayload<S['select'][P]>>  :
        P extends '_count' ? RecipesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Recipes ? Recipes[P] : never
  } 
      : Recipes


  type RecipesCountArgs = 
    Omit<RecipesFindManyArgs, 'select' | 'include'> & {
      select?: RecipesCountAggregateInputType | true
    }

  export interface RecipesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Recipes that matches the filter.
     * @param {RecipesFindUniqueArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Recipes'> extends True ? Prisma__RecipesClient<RecipesGetPayload<T>> : Prisma__RecipesClient<RecipesGetPayload<T> | null, null>

    /**
     * Find one Recipes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecipesFindUniqueOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecipesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RecipesFindUniqueOrThrowArgs>
    ): Prisma__RecipesClient<RecipesGetPayload<T>>

    /**
     * Find the first Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesFindFirstArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Recipes'> extends True ? Prisma__RecipesClient<RecipesGetPayload<T>> : Prisma__RecipesClient<RecipesGetPayload<T> | null, null>

    /**
     * Find the first Recipes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesFindFirstOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecipesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RecipesFindFirstOrThrowArgs>
    ): Prisma__RecipesClient<RecipesGetPayload<T>>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipes.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipesWithIdOnly = await prisma.recipes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipesFindManyArgs>(
      args?: SelectSubset<T, RecipesFindManyArgs>
    ): Prisma.PrismaPromise<Array<RecipesGetPayload<T>>>

    /**
     * Create a Recipes.
     * @param {RecipesCreateArgs} args - Arguments to create a Recipes.
     * @example
     * // Create one Recipes
     * const Recipes = await prisma.recipes.create({
     *   data: {
     *     // ... data to create a Recipes
     *   }
     * })
     * 
    **/
    create<T extends RecipesCreateArgs>(
      args: SelectSubset<T, RecipesCreateArgs>
    ): Prisma__RecipesClient<RecipesGetPayload<T>>

    /**
     * Create many Recipes.
     *     @param {RecipesCreateManyArgs} args - Arguments to create many Recipes.
     *     @example
     *     // Create many Recipes
     *     const recipes = await prisma.recipes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipesCreateManyArgs>(
      args?: SelectSubset<T, RecipesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipes.
     * @param {RecipesDeleteArgs} args - Arguments to delete one Recipes.
     * @example
     * // Delete one Recipes
     * const Recipes = await prisma.recipes.delete({
     *   where: {
     *     // ... filter to delete one Recipes
     *   }
     * })
     * 
    **/
    delete<T extends RecipesDeleteArgs>(
      args: SelectSubset<T, RecipesDeleteArgs>
    ): Prisma__RecipesClient<RecipesGetPayload<T>>

    /**
     * Update one Recipes.
     * @param {RecipesUpdateArgs} args - Arguments to update one Recipes.
     * @example
     * // Update one Recipes
     * const recipes = await prisma.recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipesUpdateArgs>(
      args: SelectSubset<T, RecipesUpdateArgs>
    ): Prisma__RecipesClient<RecipesGetPayload<T>>

    /**
     * Delete zero or more Recipes.
     * @param {RecipesDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipesDeleteManyArgs>(
      args?: SelectSubset<T, RecipesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipes = await prisma.recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipesUpdateManyArgs>(
      args: SelectSubset<T, RecipesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipes.
     * @param {RecipesUpsertArgs} args - Arguments to update or create a Recipes.
     * @example
     * // Update or create a Recipes
     * const recipes = await prisma.recipes.upsert({
     *   create: {
     *     // ... data to create a Recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipes we want to update
     *   }
     * })
    **/
    upsert<T extends RecipesUpsertArgs>(
      args: SelectSubset<T, RecipesUpsertArgs>
    ): Prisma__RecipesClient<RecipesGetPayload<T>>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipes.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipesCountArgs>(
      args?: Subset<T, RecipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipesAggregateArgs>(args: Subset<T, RecipesAggregateArgs>): Prisma.PrismaPromise<GetRecipesAggregateType<T>>

    /**
     * Group by Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesGroupByArgs} args - Group by arguments.
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
      T extends RecipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipesGroupByArgs['orderBy'] }
        : { orderBy?: RecipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    chocolate_batch<T extends Recipes$chocolate_batchArgs= {}>(args?: Subset<T, Recipes$chocolate_batchArgs>): Prisma.PrismaPromise<Array<Chocolate_batchGetPayload<T>>| Null>;

    recipe_ingredients<T extends Recipes$recipe_ingredientsArgs= {}>(args?: Subset<T, Recipes$recipe_ingredientsArgs>): Prisma.PrismaPromise<Array<Recipe_ingredientsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Recipes base type for findUnique actions
   */
  export type RecipesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * Filter, which Recipes to fetch.
     */
    where: RecipesWhereUniqueInput
  }

  /**
   * Recipes findUnique
   */
  export interface RecipesFindUniqueArgs extends RecipesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recipes findUniqueOrThrow
   */
  export type RecipesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * Filter, which Recipes to fetch.
     */
    where: RecipesWhereUniqueInput
  }


  /**
   * Recipes base type for findFirst actions
   */
  export type RecipesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Enumerable<RecipesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: Enumerable<RecipesScalarFieldEnum>
  }

  /**
   * Recipes findFirst
   */
  export interface RecipesFindFirstArgs extends RecipesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recipes findFirstOrThrow
   */
  export type RecipesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Enumerable<RecipesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: Enumerable<RecipesScalarFieldEnum>
  }


  /**
   * Recipes findMany
   */
  export type RecipesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Enumerable<RecipesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: Enumerable<RecipesScalarFieldEnum>
  }


  /**
   * Recipes create
   */
  export type RecipesCreateArgs = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * The data needed to create a Recipes.
     */
    data: XOR<RecipesCreateInput, RecipesUncheckedCreateInput>
  }


  /**
   * Recipes createMany
   */
  export type RecipesCreateManyArgs = {
    /**
     * The data used to create many Recipes.
     */
    data: Enumerable<RecipesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Recipes update
   */
  export type RecipesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * The data needed to update a Recipes.
     */
    data: XOR<RecipesUpdateInput, RecipesUncheckedUpdateInput>
    /**
     * Choose, which Recipes to update.
     */
    where: RecipesWhereUniqueInput
  }


  /**
   * Recipes updateMany
   */
  export type RecipesUpdateManyArgs = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipesUpdateManyMutationInput, RecipesUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipesWhereInput
  }


  /**
   * Recipes upsert
   */
  export type RecipesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * The filter to search for the Recipes to update in case it exists.
     */
    where: RecipesWhereUniqueInput
    /**
     * In case the Recipes found by the `where` argument doesn't exist, create a new Recipes with this data.
     */
    create: XOR<RecipesCreateInput, RecipesUncheckedCreateInput>
    /**
     * In case the Recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipesUpdateInput, RecipesUncheckedUpdateInput>
  }


  /**
   * Recipes delete
   */
  export type RecipesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
    /**
     * Filter which Recipes to delete.
     */
    where: RecipesWhereUniqueInput
  }


  /**
   * Recipes deleteMany
   */
  export type RecipesDeleteManyArgs = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipesWhereInput
  }


  /**
   * Recipes.chocolate_batch
   */
  export type Recipes$chocolate_batchArgs = {
    /**
     * Select specific fields to fetch from the Chocolate_batch
     */
    select?: Chocolate_batchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Chocolate_batchInclude | null
    where?: Chocolate_batchWhereInput
    orderBy?: Enumerable<Chocolate_batchOrderByWithRelationInput>
    cursor?: Chocolate_batchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Chocolate_batchScalarFieldEnum>
  }


  /**
   * Recipes.recipe_ingredients
   */
  export type Recipes$recipe_ingredientsArgs = {
    /**
     * Select specific fields to fetch from the Recipe_ingredients
     */
    select?: Recipe_ingredientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Recipe_ingredientsInclude | null
    where?: Recipe_ingredientsWhereInput
    orderBy?: Enumerable<Recipe_ingredientsOrderByWithRelationInput>
    cursor?: Recipe_ingredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Recipe_ingredientsScalarFieldEnum>
  }


  /**
   * Recipes without action
   */
  export type RecipesArgs = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Chocolate_batchScalarFieldEnum: {
    id: 'id',
    recipe_id: 'recipe_id',
    bean_origin: 'bean_origin',
    importer: 'importer',
    production_date: 'production_date'
  };

  export type Chocolate_batchScalarFieldEnum = (typeof Chocolate_batchScalarFieldEnum)[keyof typeof Chocolate_batchScalarFieldEnum]


  export const Production_commentsScalarFieldEnum: {
    id: 'id',
    batch_id: 'batch_id',
    user_name: 'user_name',
    comment_timestamp: 'comment_timestamp',
    comment_text: 'comment_text',
    attachment_path: 'attachment_path'
  };

  export type Production_commentsScalarFieldEnum = (typeof Production_commentsScalarFieldEnum)[keyof typeof Production_commentsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const Recipe_ingredientsScalarFieldEnum: {
    id: 'id',
    recipe_id: 'recipe_id',
    name: 'name',
    percentage: 'percentage'
  };

  export type Recipe_ingredientsScalarFieldEnum = (typeof Recipe_ingredientsScalarFieldEnum)[keyof typeof Recipe_ingredientsScalarFieldEnum]


  export const RecipesScalarFieldEnum: {
    id: 'id',
    description: 'description',
    name: 'name'
  };

  export type RecipesScalarFieldEnum = (typeof RecipesScalarFieldEnum)[keyof typeof RecipesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type Chocolate_batchWhereInput = {
    AND?: Enumerable<Chocolate_batchWhereInput>
    OR?: Enumerable<Chocolate_batchWhereInput>
    NOT?: Enumerable<Chocolate_batchWhereInput>
    id?: UuidFilter | string
    recipe_id?: UuidNullableFilter | string | null
    bean_origin?: StringFilter | string
    importer?: StringFilter | string
    production_date?: DateTimeFilter | Date | string
    recipes?: XOR<RecipesRelationFilter, RecipesWhereInput> | null
    production_comments?: Production_commentsListRelationFilter
  }

  export type Chocolate_batchOrderByWithRelationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    bean_origin?: SortOrder
    importer?: SortOrder
    production_date?: SortOrder
    recipes?: RecipesOrderByWithRelationInput
    production_comments?: Production_commentsOrderByRelationAggregateInput
  }

  export type Chocolate_batchWhereUniqueInput = {
    id?: string
  }

  export type Chocolate_batchOrderByWithAggregationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    bean_origin?: SortOrder
    importer?: SortOrder
    production_date?: SortOrder
    _count?: Chocolate_batchCountOrderByAggregateInput
    _max?: Chocolate_batchMaxOrderByAggregateInput
    _min?: Chocolate_batchMinOrderByAggregateInput
  }

  export type Chocolate_batchScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Chocolate_batchScalarWhereWithAggregatesInput>
    OR?: Enumerable<Chocolate_batchScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Chocolate_batchScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    recipe_id?: UuidNullableWithAggregatesFilter | string | null
    bean_origin?: StringWithAggregatesFilter | string
    importer?: StringWithAggregatesFilter | string
    production_date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Production_commentsWhereInput = {
    AND?: Enumerable<Production_commentsWhereInput>
    OR?: Enumerable<Production_commentsWhereInput>
    NOT?: Enumerable<Production_commentsWhereInput>
    id?: UuidFilter | string
    batch_id?: UuidNullableFilter | string | null
    user_name?: StringFilter | string
    comment_timestamp?: DateTimeNullableFilter | Date | string | null
    comment_text?: StringFilter | string
    attachment_path?: StringNullableFilter | string | null
    chocolate_batch?: XOR<Chocolate_batchRelationFilter, Chocolate_batchWhereInput> | null
  }

  export type Production_commentsOrderByWithRelationInput = {
    id?: SortOrder
    batch_id?: SortOrder
    user_name?: SortOrder
    comment_timestamp?: SortOrder
    comment_text?: SortOrder
    attachment_path?: SortOrder
    chocolate_batch?: Chocolate_batchOrderByWithRelationInput
  }

  export type Production_commentsWhereUniqueInput = {
    id?: string
  }

  export type Production_commentsOrderByWithAggregationInput = {
    id?: SortOrder
    batch_id?: SortOrder
    user_name?: SortOrder
    comment_timestamp?: SortOrder
    comment_text?: SortOrder
    attachment_path?: SortOrder
    _count?: Production_commentsCountOrderByAggregateInput
    _max?: Production_commentsMaxOrderByAggregateInput
    _min?: Production_commentsMinOrderByAggregateInput
  }

  export type Production_commentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Production_commentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Production_commentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Production_commentsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    batch_id?: UuidNullableWithAggregatesFilter | string | null
    user_name?: StringWithAggregatesFilter | string
    comment_timestamp?: DateTimeNullableWithAggregatesFilter | Date | string | null
    comment_text?: StringWithAggregatesFilter | string
    attachment_path?: StringNullableWithAggregatesFilter | string | null
  }

  export type Recipe_ingredientsWhereInput = {
    AND?: Enumerable<Recipe_ingredientsWhereInput>
    OR?: Enumerable<Recipe_ingredientsWhereInput>
    NOT?: Enumerable<Recipe_ingredientsWhereInput>
    id?: UuidFilter | string
    recipe_id?: UuidNullableFilter | string | null
    name?: StringFilter | string
    percentage?: IntFilter | number
    recipes?: XOR<RecipesRelationFilter, RecipesWhereInput> | null
  }

  export type Recipe_ingredientsOrderByWithRelationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    name?: SortOrder
    percentage?: SortOrder
    recipes?: RecipesOrderByWithRelationInput
  }

  export type Recipe_ingredientsWhereUniqueInput = {
    id?: string
  }

  export type Recipe_ingredientsOrderByWithAggregationInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    name?: SortOrder
    percentage?: SortOrder
    _count?: Recipe_ingredientsCountOrderByAggregateInput
    _avg?: Recipe_ingredientsAvgOrderByAggregateInput
    _max?: Recipe_ingredientsMaxOrderByAggregateInput
    _min?: Recipe_ingredientsMinOrderByAggregateInput
    _sum?: Recipe_ingredientsSumOrderByAggregateInput
  }

  export type Recipe_ingredientsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Recipe_ingredientsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Recipe_ingredientsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Recipe_ingredientsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    recipe_id?: UuidNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    percentage?: IntWithAggregatesFilter | number
  }

  export type RecipesWhereInput = {
    AND?: Enumerable<RecipesWhereInput>
    OR?: Enumerable<RecipesWhereInput>
    NOT?: Enumerable<RecipesWhereInput>
    id?: UuidFilter | string
    description?: StringFilter | string
    name?: StringFilter | string
    chocolate_batch?: Chocolate_batchListRelationFilter
    recipe_ingredients?: Recipe_ingredientsListRelationFilter
  }

  export type RecipesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
    chocolate_batch?: Chocolate_batchOrderByRelationAggregateInput
    recipe_ingredients?: Recipe_ingredientsOrderByRelationAggregateInput
  }

  export type RecipesWhereUniqueInput = {
    id?: string
  }

  export type RecipesOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
    _count?: RecipesCountOrderByAggregateInput
    _max?: RecipesMaxOrderByAggregateInput
    _min?: RecipesMinOrderByAggregateInput
  }

  export type RecipesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipesScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipesScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type Chocolate_batchCreateInput = {
    id: string
    bean_origin: string
    importer: string
    production_date: Date | string
    recipes?: RecipesCreateNestedOneWithoutChocolate_batchInput
    production_comments?: Production_commentsCreateNestedManyWithoutChocolate_batchInput
  }

  export type Chocolate_batchUncheckedCreateInput = {
    id: string
    recipe_id?: string | null
    bean_origin: string
    importer: string
    production_date: Date | string
    production_comments?: Production_commentsUncheckedCreateNestedManyWithoutChocolate_batchInput
  }

  export type Chocolate_batchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipesUpdateOneWithoutChocolate_batchNestedInput
    production_comments?: Production_commentsUpdateManyWithoutChocolate_batchNestedInput
  }

  export type Chocolate_batchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
    production_comments?: Production_commentsUncheckedUpdateManyWithoutChocolate_batchNestedInput
  }

  export type Chocolate_batchCreateManyInput = {
    id: string
    recipe_id?: string | null
    bean_origin: string
    importer: string
    production_date: Date | string
  }

  export type Chocolate_batchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Chocolate_batchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Production_commentsCreateInput = {
    id: string
    user_name: string
    comment_timestamp?: Date | string | null
    comment_text: string
    attachment_path?: string | null
    chocolate_batch?: Chocolate_batchCreateNestedOneWithoutProduction_commentsInput
  }

  export type Production_commentsUncheckedCreateInput = {
    id: string
    batch_id?: string | null
    user_name: string
    comment_timestamp?: Date | string | null
    comment_text: string
    attachment_path?: string | null
  }

  export type Production_commentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    comment_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_text?: StringFieldUpdateOperationsInput | string
    attachment_path?: NullableStringFieldUpdateOperationsInput | string | null
    chocolate_batch?: Chocolate_batchUpdateOneWithoutProduction_commentsNestedInput
  }

  export type Production_commentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batch_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    comment_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_text?: StringFieldUpdateOperationsInput | string
    attachment_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Production_commentsCreateManyInput = {
    id: string
    batch_id?: string | null
    user_name: string
    comment_timestamp?: Date | string | null
    comment_text: string
    attachment_path?: string | null
  }

  export type Production_commentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    comment_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_text?: StringFieldUpdateOperationsInput | string
    attachment_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Production_commentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batch_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: StringFieldUpdateOperationsInput | string
    comment_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_text?: StringFieldUpdateOperationsInput | string
    attachment_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Recipe_ingredientsCreateInput = {
    id: string
    name: string
    percentage: number
    recipes?: RecipesCreateNestedOneWithoutRecipe_ingredientsInput
  }

  export type Recipe_ingredientsUncheckedCreateInput = {
    id: string
    recipe_id?: string | null
    name: string
    percentage: number
  }

  export type Recipe_ingredientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    recipes?: RecipesUpdateOneWithoutRecipe_ingredientsNestedInput
  }

  export type Recipe_ingredientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_ingredientsCreateManyInput = {
    id: string
    recipe_id?: string | null
    name: string
    percentage: number
  }

  export type Recipe_ingredientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_ingredientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type RecipesCreateInput = {
    id: string
    description: string
    name: string
    chocolate_batch?: Chocolate_batchCreateNestedManyWithoutRecipesInput
    recipe_ingredients?: Recipe_ingredientsCreateNestedManyWithoutRecipesInput
  }

  export type RecipesUncheckedCreateInput = {
    id: string
    description: string
    name: string
    chocolate_batch?: Chocolate_batchUncheckedCreateNestedManyWithoutRecipesInput
    recipe_ingredients?: Recipe_ingredientsUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type RecipesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chocolate_batch?: Chocolate_batchUpdateManyWithoutRecipesNestedInput
    recipe_ingredients?: Recipe_ingredientsUpdateManyWithoutRecipesNestedInput
  }

  export type RecipesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chocolate_batch?: Chocolate_batchUncheckedUpdateManyWithoutRecipesNestedInput
    recipe_ingredients?: Recipe_ingredientsUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type RecipesCreateManyInput = {
    id: string
    description: string
    name: string
  }

  export type RecipesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type UuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type RecipesRelationFilter = {
    is?: RecipesWhereInput | null
    isNot?: RecipesWhereInput | null
  }

  export type Production_commentsListRelationFilter = {
    every?: Production_commentsWhereInput
    some?: Production_commentsWhereInput
    none?: Production_commentsWhereInput
  }

  export type Production_commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Chocolate_batchCountOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    bean_origin?: SortOrder
    importer?: SortOrder
    production_date?: SortOrder
  }

  export type Chocolate_batchMaxOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    bean_origin?: SortOrder
    importer?: SortOrder
    production_date?: SortOrder
  }

  export type Chocolate_batchMinOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    bean_origin?: SortOrder
    importer?: SortOrder
    production_date?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type Chocolate_batchRelationFilter = {
    is?: Chocolate_batchWhereInput | null
    isNot?: Chocolate_batchWhereInput | null
  }

  export type Production_commentsCountOrderByAggregateInput = {
    id?: SortOrder
    batch_id?: SortOrder
    user_name?: SortOrder
    comment_timestamp?: SortOrder
    comment_text?: SortOrder
    attachment_path?: SortOrder
  }

  export type Production_commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    batch_id?: SortOrder
    user_name?: SortOrder
    comment_timestamp?: SortOrder
    comment_text?: SortOrder
    attachment_path?: SortOrder
  }

  export type Production_commentsMinOrderByAggregateInput = {
    id?: SortOrder
    batch_id?: SortOrder
    user_name?: SortOrder
    comment_timestamp?: SortOrder
    comment_text?: SortOrder
    attachment_path?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type Recipe_ingredientsCountOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    name?: SortOrder
    percentage?: SortOrder
  }

  export type Recipe_ingredientsAvgOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type Recipe_ingredientsMaxOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    name?: SortOrder
    percentage?: SortOrder
  }

  export type Recipe_ingredientsMinOrderByAggregateInput = {
    id?: SortOrder
    recipe_id?: SortOrder
    name?: SortOrder
    percentage?: SortOrder
  }

  export type Recipe_ingredientsSumOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type Chocolate_batchListRelationFilter = {
    every?: Chocolate_batchWhereInput
    some?: Chocolate_batchWhereInput
    none?: Chocolate_batchWhereInput
  }

  export type Recipe_ingredientsListRelationFilter = {
    every?: Recipe_ingredientsWhereInput
    some?: Recipe_ingredientsWhereInput
    none?: Recipe_ingredientsWhereInput
  }

  export type Chocolate_batchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Recipe_ingredientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipesCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
  }

  export type RecipesMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
  }

  export type RecipesMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
  }

  export type RecipesCreateNestedOneWithoutChocolate_batchInput = {
    create?: XOR<RecipesCreateWithoutChocolate_batchInput, RecipesUncheckedCreateWithoutChocolate_batchInput>
    connectOrCreate?: RecipesCreateOrConnectWithoutChocolate_batchInput
    connect?: RecipesWhereUniqueInput
  }

  export type Production_commentsCreateNestedManyWithoutChocolate_batchInput = {
    create?: XOR<Enumerable<Production_commentsCreateWithoutChocolate_batchInput>, Enumerable<Production_commentsUncheckedCreateWithoutChocolate_batchInput>>
    connectOrCreate?: Enumerable<Production_commentsCreateOrConnectWithoutChocolate_batchInput>
    createMany?: Production_commentsCreateManyChocolate_batchInputEnvelope
    connect?: Enumerable<Production_commentsWhereUniqueInput>
  }

  export type Production_commentsUncheckedCreateNestedManyWithoutChocolate_batchInput = {
    create?: XOR<Enumerable<Production_commentsCreateWithoutChocolate_batchInput>, Enumerable<Production_commentsUncheckedCreateWithoutChocolate_batchInput>>
    connectOrCreate?: Enumerable<Production_commentsCreateOrConnectWithoutChocolate_batchInput>
    createMany?: Production_commentsCreateManyChocolate_batchInputEnvelope
    connect?: Enumerable<Production_commentsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecipesUpdateOneWithoutChocolate_batchNestedInput = {
    create?: XOR<RecipesCreateWithoutChocolate_batchInput, RecipesUncheckedCreateWithoutChocolate_batchInput>
    connectOrCreate?: RecipesCreateOrConnectWithoutChocolate_batchInput
    upsert?: RecipesUpsertWithoutChocolate_batchInput
    disconnect?: boolean
    delete?: boolean
    connect?: RecipesWhereUniqueInput
    update?: XOR<RecipesUpdateWithoutChocolate_batchInput, RecipesUncheckedUpdateWithoutChocolate_batchInput>
  }

  export type Production_commentsUpdateManyWithoutChocolate_batchNestedInput = {
    create?: XOR<Enumerable<Production_commentsCreateWithoutChocolate_batchInput>, Enumerable<Production_commentsUncheckedCreateWithoutChocolate_batchInput>>
    connectOrCreate?: Enumerable<Production_commentsCreateOrConnectWithoutChocolate_batchInput>
    upsert?: Enumerable<Production_commentsUpsertWithWhereUniqueWithoutChocolate_batchInput>
    createMany?: Production_commentsCreateManyChocolate_batchInputEnvelope
    set?: Enumerable<Production_commentsWhereUniqueInput>
    disconnect?: Enumerable<Production_commentsWhereUniqueInput>
    delete?: Enumerable<Production_commentsWhereUniqueInput>
    connect?: Enumerable<Production_commentsWhereUniqueInput>
    update?: Enumerable<Production_commentsUpdateWithWhereUniqueWithoutChocolate_batchInput>
    updateMany?: Enumerable<Production_commentsUpdateManyWithWhereWithoutChocolate_batchInput>
    deleteMany?: Enumerable<Production_commentsScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Production_commentsUncheckedUpdateManyWithoutChocolate_batchNestedInput = {
    create?: XOR<Enumerable<Production_commentsCreateWithoutChocolate_batchInput>, Enumerable<Production_commentsUncheckedCreateWithoutChocolate_batchInput>>
    connectOrCreate?: Enumerable<Production_commentsCreateOrConnectWithoutChocolate_batchInput>
    upsert?: Enumerable<Production_commentsUpsertWithWhereUniqueWithoutChocolate_batchInput>
    createMany?: Production_commentsCreateManyChocolate_batchInputEnvelope
    set?: Enumerable<Production_commentsWhereUniqueInput>
    disconnect?: Enumerable<Production_commentsWhereUniqueInput>
    delete?: Enumerable<Production_commentsWhereUniqueInput>
    connect?: Enumerable<Production_commentsWhereUniqueInput>
    update?: Enumerable<Production_commentsUpdateWithWhereUniqueWithoutChocolate_batchInput>
    updateMany?: Enumerable<Production_commentsUpdateManyWithWhereWithoutChocolate_batchInput>
    deleteMany?: Enumerable<Production_commentsScalarWhereInput>
  }

  export type Chocolate_batchCreateNestedOneWithoutProduction_commentsInput = {
    create?: XOR<Chocolate_batchCreateWithoutProduction_commentsInput, Chocolate_batchUncheckedCreateWithoutProduction_commentsInput>
    connectOrCreate?: Chocolate_batchCreateOrConnectWithoutProduction_commentsInput
    connect?: Chocolate_batchWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Chocolate_batchUpdateOneWithoutProduction_commentsNestedInput = {
    create?: XOR<Chocolate_batchCreateWithoutProduction_commentsInput, Chocolate_batchUncheckedCreateWithoutProduction_commentsInput>
    connectOrCreate?: Chocolate_batchCreateOrConnectWithoutProduction_commentsInput
    upsert?: Chocolate_batchUpsertWithoutProduction_commentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: Chocolate_batchWhereUniqueInput
    update?: XOR<Chocolate_batchUpdateWithoutProduction_commentsInput, Chocolate_batchUncheckedUpdateWithoutProduction_commentsInput>
  }

  export type RecipesCreateNestedOneWithoutRecipe_ingredientsInput = {
    create?: XOR<RecipesCreateWithoutRecipe_ingredientsInput, RecipesUncheckedCreateWithoutRecipe_ingredientsInput>
    connectOrCreate?: RecipesCreateOrConnectWithoutRecipe_ingredientsInput
    connect?: RecipesWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipesUpdateOneWithoutRecipe_ingredientsNestedInput = {
    create?: XOR<RecipesCreateWithoutRecipe_ingredientsInput, RecipesUncheckedCreateWithoutRecipe_ingredientsInput>
    connectOrCreate?: RecipesCreateOrConnectWithoutRecipe_ingredientsInput
    upsert?: RecipesUpsertWithoutRecipe_ingredientsInput
    disconnect?: boolean
    delete?: boolean
    connect?: RecipesWhereUniqueInput
    update?: XOR<RecipesUpdateWithoutRecipe_ingredientsInput, RecipesUncheckedUpdateWithoutRecipe_ingredientsInput>
  }

  export type Chocolate_batchCreateNestedManyWithoutRecipesInput = {
    create?: XOR<Enumerable<Chocolate_batchCreateWithoutRecipesInput>, Enumerable<Chocolate_batchUncheckedCreateWithoutRecipesInput>>
    connectOrCreate?: Enumerable<Chocolate_batchCreateOrConnectWithoutRecipesInput>
    createMany?: Chocolate_batchCreateManyRecipesInputEnvelope
    connect?: Enumerable<Chocolate_batchWhereUniqueInput>
  }

  export type Recipe_ingredientsCreateNestedManyWithoutRecipesInput = {
    create?: XOR<Enumerable<Recipe_ingredientsCreateWithoutRecipesInput>, Enumerable<Recipe_ingredientsUncheckedCreateWithoutRecipesInput>>
    connectOrCreate?: Enumerable<Recipe_ingredientsCreateOrConnectWithoutRecipesInput>
    createMany?: Recipe_ingredientsCreateManyRecipesInputEnvelope
    connect?: Enumerable<Recipe_ingredientsWhereUniqueInput>
  }

  export type Chocolate_batchUncheckedCreateNestedManyWithoutRecipesInput = {
    create?: XOR<Enumerable<Chocolate_batchCreateWithoutRecipesInput>, Enumerable<Chocolate_batchUncheckedCreateWithoutRecipesInput>>
    connectOrCreate?: Enumerable<Chocolate_batchCreateOrConnectWithoutRecipesInput>
    createMany?: Chocolate_batchCreateManyRecipesInputEnvelope
    connect?: Enumerable<Chocolate_batchWhereUniqueInput>
  }

  export type Recipe_ingredientsUncheckedCreateNestedManyWithoutRecipesInput = {
    create?: XOR<Enumerable<Recipe_ingredientsCreateWithoutRecipesInput>, Enumerable<Recipe_ingredientsUncheckedCreateWithoutRecipesInput>>
    connectOrCreate?: Enumerable<Recipe_ingredientsCreateOrConnectWithoutRecipesInput>
    createMany?: Recipe_ingredientsCreateManyRecipesInputEnvelope
    connect?: Enumerable<Recipe_ingredientsWhereUniqueInput>
  }

  export type Chocolate_batchUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<Enumerable<Chocolate_batchCreateWithoutRecipesInput>, Enumerable<Chocolate_batchUncheckedCreateWithoutRecipesInput>>
    connectOrCreate?: Enumerable<Chocolate_batchCreateOrConnectWithoutRecipesInput>
    upsert?: Enumerable<Chocolate_batchUpsertWithWhereUniqueWithoutRecipesInput>
    createMany?: Chocolate_batchCreateManyRecipesInputEnvelope
    set?: Enumerable<Chocolate_batchWhereUniqueInput>
    disconnect?: Enumerable<Chocolate_batchWhereUniqueInput>
    delete?: Enumerable<Chocolate_batchWhereUniqueInput>
    connect?: Enumerable<Chocolate_batchWhereUniqueInput>
    update?: Enumerable<Chocolate_batchUpdateWithWhereUniqueWithoutRecipesInput>
    updateMany?: Enumerable<Chocolate_batchUpdateManyWithWhereWithoutRecipesInput>
    deleteMany?: Enumerable<Chocolate_batchScalarWhereInput>
  }

  export type Recipe_ingredientsUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<Enumerable<Recipe_ingredientsCreateWithoutRecipesInput>, Enumerable<Recipe_ingredientsUncheckedCreateWithoutRecipesInput>>
    connectOrCreate?: Enumerable<Recipe_ingredientsCreateOrConnectWithoutRecipesInput>
    upsert?: Enumerable<Recipe_ingredientsUpsertWithWhereUniqueWithoutRecipesInput>
    createMany?: Recipe_ingredientsCreateManyRecipesInputEnvelope
    set?: Enumerable<Recipe_ingredientsWhereUniqueInput>
    disconnect?: Enumerable<Recipe_ingredientsWhereUniqueInput>
    delete?: Enumerable<Recipe_ingredientsWhereUniqueInput>
    connect?: Enumerable<Recipe_ingredientsWhereUniqueInput>
    update?: Enumerable<Recipe_ingredientsUpdateWithWhereUniqueWithoutRecipesInput>
    updateMany?: Enumerable<Recipe_ingredientsUpdateManyWithWhereWithoutRecipesInput>
    deleteMany?: Enumerable<Recipe_ingredientsScalarWhereInput>
  }

  export type Chocolate_batchUncheckedUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<Enumerable<Chocolate_batchCreateWithoutRecipesInput>, Enumerable<Chocolate_batchUncheckedCreateWithoutRecipesInput>>
    connectOrCreate?: Enumerable<Chocolate_batchCreateOrConnectWithoutRecipesInput>
    upsert?: Enumerable<Chocolate_batchUpsertWithWhereUniqueWithoutRecipesInput>
    createMany?: Chocolate_batchCreateManyRecipesInputEnvelope
    set?: Enumerable<Chocolate_batchWhereUniqueInput>
    disconnect?: Enumerable<Chocolate_batchWhereUniqueInput>
    delete?: Enumerable<Chocolate_batchWhereUniqueInput>
    connect?: Enumerable<Chocolate_batchWhereUniqueInput>
    update?: Enumerable<Chocolate_batchUpdateWithWhereUniqueWithoutRecipesInput>
    updateMany?: Enumerable<Chocolate_batchUpdateManyWithWhereWithoutRecipesInput>
    deleteMany?: Enumerable<Chocolate_batchScalarWhereInput>
  }

  export type Recipe_ingredientsUncheckedUpdateManyWithoutRecipesNestedInput = {
    create?: XOR<Enumerable<Recipe_ingredientsCreateWithoutRecipesInput>, Enumerable<Recipe_ingredientsUncheckedCreateWithoutRecipesInput>>
    connectOrCreate?: Enumerable<Recipe_ingredientsCreateOrConnectWithoutRecipesInput>
    upsert?: Enumerable<Recipe_ingredientsUpsertWithWhereUniqueWithoutRecipesInput>
    createMany?: Recipe_ingredientsCreateManyRecipesInputEnvelope
    set?: Enumerable<Recipe_ingredientsWhereUniqueInput>
    disconnect?: Enumerable<Recipe_ingredientsWhereUniqueInput>
    delete?: Enumerable<Recipe_ingredientsWhereUniqueInput>
    connect?: Enumerable<Recipe_ingredientsWhereUniqueInput>
    update?: Enumerable<Recipe_ingredientsUpdateWithWhereUniqueWithoutRecipesInput>
    updateMany?: Enumerable<Recipe_ingredientsUpdateManyWithWhereWithoutRecipesInput>
    deleteMany?: Enumerable<Recipe_ingredientsScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedUuidNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedUuidNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type RecipesCreateWithoutChocolate_batchInput = {
    id: string
    description: string
    name: string
    recipe_ingredients?: Recipe_ingredientsCreateNestedManyWithoutRecipesInput
  }

  export type RecipesUncheckedCreateWithoutChocolate_batchInput = {
    id: string
    description: string
    name: string
    recipe_ingredients?: Recipe_ingredientsUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type RecipesCreateOrConnectWithoutChocolate_batchInput = {
    where: RecipesWhereUniqueInput
    create: XOR<RecipesCreateWithoutChocolate_batchInput, RecipesUncheckedCreateWithoutChocolate_batchInput>
  }

  export type Production_commentsCreateWithoutChocolate_batchInput = {
    id: string
    user_name: string
    comment_timestamp?: Date | string | null
    comment_text: string
    attachment_path?: string | null
  }

  export type Production_commentsUncheckedCreateWithoutChocolate_batchInput = {
    id: string
    user_name: string
    comment_timestamp?: Date | string | null
    comment_text: string
    attachment_path?: string | null
  }

  export type Production_commentsCreateOrConnectWithoutChocolate_batchInput = {
    where: Production_commentsWhereUniqueInput
    create: XOR<Production_commentsCreateWithoutChocolate_batchInput, Production_commentsUncheckedCreateWithoutChocolate_batchInput>
  }

  export type Production_commentsCreateManyChocolate_batchInputEnvelope = {
    data: Enumerable<Production_commentsCreateManyChocolate_batchInput>
    skipDuplicates?: boolean
  }

  export type RecipesUpsertWithoutChocolate_batchInput = {
    update: XOR<RecipesUpdateWithoutChocolate_batchInput, RecipesUncheckedUpdateWithoutChocolate_batchInput>
    create: XOR<RecipesCreateWithoutChocolate_batchInput, RecipesUncheckedCreateWithoutChocolate_batchInput>
  }

  export type RecipesUpdateWithoutChocolate_batchInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipe_ingredients?: Recipe_ingredientsUpdateManyWithoutRecipesNestedInput
  }

  export type RecipesUncheckedUpdateWithoutChocolate_batchInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recipe_ingredients?: Recipe_ingredientsUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type Production_commentsUpsertWithWhereUniqueWithoutChocolate_batchInput = {
    where: Production_commentsWhereUniqueInput
    update: XOR<Production_commentsUpdateWithoutChocolate_batchInput, Production_commentsUncheckedUpdateWithoutChocolate_batchInput>
    create: XOR<Production_commentsCreateWithoutChocolate_batchInput, Production_commentsUncheckedCreateWithoutChocolate_batchInput>
  }

  export type Production_commentsUpdateWithWhereUniqueWithoutChocolate_batchInput = {
    where: Production_commentsWhereUniqueInput
    data: XOR<Production_commentsUpdateWithoutChocolate_batchInput, Production_commentsUncheckedUpdateWithoutChocolate_batchInput>
  }

  export type Production_commentsUpdateManyWithWhereWithoutChocolate_batchInput = {
    where: Production_commentsScalarWhereInput
    data: XOR<Production_commentsUpdateManyMutationInput, Production_commentsUncheckedUpdateManyWithoutProduction_commentsInput>
  }

  export type Production_commentsScalarWhereInput = {
    AND?: Enumerable<Production_commentsScalarWhereInput>
    OR?: Enumerable<Production_commentsScalarWhereInput>
    NOT?: Enumerable<Production_commentsScalarWhereInput>
    id?: UuidFilter | string
    batch_id?: UuidNullableFilter | string | null
    user_name?: StringFilter | string
    comment_timestamp?: DateTimeNullableFilter | Date | string | null
    comment_text?: StringFilter | string
    attachment_path?: StringNullableFilter | string | null
  }

  export type Chocolate_batchCreateWithoutProduction_commentsInput = {
    id: string
    bean_origin: string
    importer: string
    production_date: Date | string
    recipes?: RecipesCreateNestedOneWithoutChocolate_batchInput
  }

  export type Chocolate_batchUncheckedCreateWithoutProduction_commentsInput = {
    id: string
    recipe_id?: string | null
    bean_origin: string
    importer: string
    production_date: Date | string
  }

  export type Chocolate_batchCreateOrConnectWithoutProduction_commentsInput = {
    where: Chocolate_batchWhereUniqueInput
    create: XOR<Chocolate_batchCreateWithoutProduction_commentsInput, Chocolate_batchUncheckedCreateWithoutProduction_commentsInput>
  }

  export type Chocolate_batchUpsertWithoutProduction_commentsInput = {
    update: XOR<Chocolate_batchUpdateWithoutProduction_commentsInput, Chocolate_batchUncheckedUpdateWithoutProduction_commentsInput>
    create: XOR<Chocolate_batchCreateWithoutProduction_commentsInput, Chocolate_batchUncheckedCreateWithoutProduction_commentsInput>
  }

  export type Chocolate_batchUpdateWithoutProduction_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
    recipes?: RecipesUpdateOneWithoutChocolate_batchNestedInput
  }

  export type Chocolate_batchUncheckedUpdateWithoutProduction_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipesCreateWithoutRecipe_ingredientsInput = {
    id: string
    description: string
    name: string
    chocolate_batch?: Chocolate_batchCreateNestedManyWithoutRecipesInput
  }

  export type RecipesUncheckedCreateWithoutRecipe_ingredientsInput = {
    id: string
    description: string
    name: string
    chocolate_batch?: Chocolate_batchUncheckedCreateNestedManyWithoutRecipesInput
  }

  export type RecipesCreateOrConnectWithoutRecipe_ingredientsInput = {
    where: RecipesWhereUniqueInput
    create: XOR<RecipesCreateWithoutRecipe_ingredientsInput, RecipesUncheckedCreateWithoutRecipe_ingredientsInput>
  }

  export type RecipesUpsertWithoutRecipe_ingredientsInput = {
    update: XOR<RecipesUpdateWithoutRecipe_ingredientsInput, RecipesUncheckedUpdateWithoutRecipe_ingredientsInput>
    create: XOR<RecipesCreateWithoutRecipe_ingredientsInput, RecipesUncheckedCreateWithoutRecipe_ingredientsInput>
  }

  export type RecipesUpdateWithoutRecipe_ingredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chocolate_batch?: Chocolate_batchUpdateManyWithoutRecipesNestedInput
  }

  export type RecipesUncheckedUpdateWithoutRecipe_ingredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    chocolate_batch?: Chocolate_batchUncheckedUpdateManyWithoutRecipesNestedInput
  }

  export type Chocolate_batchCreateWithoutRecipesInput = {
    id: string
    bean_origin: string
    importer: string
    production_date: Date | string
    production_comments?: Production_commentsCreateNestedManyWithoutChocolate_batchInput
  }

  export type Chocolate_batchUncheckedCreateWithoutRecipesInput = {
    id: string
    bean_origin: string
    importer: string
    production_date: Date | string
    production_comments?: Production_commentsUncheckedCreateNestedManyWithoutChocolate_batchInput
  }

  export type Chocolate_batchCreateOrConnectWithoutRecipesInput = {
    where: Chocolate_batchWhereUniqueInput
    create: XOR<Chocolate_batchCreateWithoutRecipesInput, Chocolate_batchUncheckedCreateWithoutRecipesInput>
  }

  export type Chocolate_batchCreateManyRecipesInputEnvelope = {
    data: Enumerable<Chocolate_batchCreateManyRecipesInput>
    skipDuplicates?: boolean
  }

  export type Recipe_ingredientsCreateWithoutRecipesInput = {
    id: string
    name: string
    percentage: number
  }

  export type Recipe_ingredientsUncheckedCreateWithoutRecipesInput = {
    id: string
    name: string
    percentage: number
  }

  export type Recipe_ingredientsCreateOrConnectWithoutRecipesInput = {
    where: Recipe_ingredientsWhereUniqueInput
    create: XOR<Recipe_ingredientsCreateWithoutRecipesInput, Recipe_ingredientsUncheckedCreateWithoutRecipesInput>
  }

  export type Recipe_ingredientsCreateManyRecipesInputEnvelope = {
    data: Enumerable<Recipe_ingredientsCreateManyRecipesInput>
    skipDuplicates?: boolean
  }

  export type Chocolate_batchUpsertWithWhereUniqueWithoutRecipesInput = {
    where: Chocolate_batchWhereUniqueInput
    update: XOR<Chocolate_batchUpdateWithoutRecipesInput, Chocolate_batchUncheckedUpdateWithoutRecipesInput>
    create: XOR<Chocolate_batchCreateWithoutRecipesInput, Chocolate_batchUncheckedCreateWithoutRecipesInput>
  }

  export type Chocolate_batchUpdateWithWhereUniqueWithoutRecipesInput = {
    where: Chocolate_batchWhereUniqueInput
    data: XOR<Chocolate_batchUpdateWithoutRecipesInput, Chocolate_batchUncheckedUpdateWithoutRecipesInput>
  }

  export type Chocolate_batchUpdateManyWithWhereWithoutRecipesInput = {
    where: Chocolate_batchScalarWhereInput
    data: XOR<Chocolate_batchUpdateManyMutationInput, Chocolate_batchUncheckedUpdateManyWithoutChocolate_batchInput>
  }

  export type Chocolate_batchScalarWhereInput = {
    AND?: Enumerable<Chocolate_batchScalarWhereInput>
    OR?: Enumerable<Chocolate_batchScalarWhereInput>
    NOT?: Enumerable<Chocolate_batchScalarWhereInput>
    id?: UuidFilter | string
    recipe_id?: UuidNullableFilter | string | null
    bean_origin?: StringFilter | string
    importer?: StringFilter | string
    production_date?: DateTimeFilter | Date | string
  }

  export type Recipe_ingredientsUpsertWithWhereUniqueWithoutRecipesInput = {
    where: Recipe_ingredientsWhereUniqueInput
    update: XOR<Recipe_ingredientsUpdateWithoutRecipesInput, Recipe_ingredientsUncheckedUpdateWithoutRecipesInput>
    create: XOR<Recipe_ingredientsCreateWithoutRecipesInput, Recipe_ingredientsUncheckedCreateWithoutRecipesInput>
  }

  export type Recipe_ingredientsUpdateWithWhereUniqueWithoutRecipesInput = {
    where: Recipe_ingredientsWhereUniqueInput
    data: XOR<Recipe_ingredientsUpdateWithoutRecipesInput, Recipe_ingredientsUncheckedUpdateWithoutRecipesInput>
  }

  export type Recipe_ingredientsUpdateManyWithWhereWithoutRecipesInput = {
    where: Recipe_ingredientsScalarWhereInput
    data: XOR<Recipe_ingredientsUpdateManyMutationInput, Recipe_ingredientsUncheckedUpdateManyWithoutRecipe_ingredientsInput>
  }

  export type Recipe_ingredientsScalarWhereInput = {
    AND?: Enumerable<Recipe_ingredientsScalarWhereInput>
    OR?: Enumerable<Recipe_ingredientsScalarWhereInput>
    NOT?: Enumerable<Recipe_ingredientsScalarWhereInput>
    id?: UuidFilter | string
    recipe_id?: UuidNullableFilter | string | null
    name?: StringFilter | string
    percentage?: IntFilter | number
  }

  export type Production_commentsCreateManyChocolate_batchInput = {
    id: string
    user_name: string
    comment_timestamp?: Date | string | null
    comment_text: string
    attachment_path?: string | null
  }

  export type Production_commentsUpdateWithoutChocolate_batchInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    comment_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_text?: StringFieldUpdateOperationsInput | string
    attachment_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Production_commentsUncheckedUpdateWithoutChocolate_batchInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    comment_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_text?: StringFieldUpdateOperationsInput | string
    attachment_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Production_commentsUncheckedUpdateManyWithoutProduction_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    comment_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment_text?: StringFieldUpdateOperationsInput | string
    attachment_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Chocolate_batchCreateManyRecipesInput = {
    id: string
    bean_origin: string
    importer: string
    production_date: Date | string
  }

  export type Recipe_ingredientsCreateManyRecipesInput = {
    id: string
    name: string
    percentage: number
  }

  export type Chocolate_batchUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
    production_comments?: Production_commentsUpdateManyWithoutChocolate_batchNestedInput
  }

  export type Chocolate_batchUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
    production_comments?: Production_commentsUncheckedUpdateManyWithoutChocolate_batchNestedInput
  }

  export type Chocolate_batchUncheckedUpdateManyWithoutChocolate_batchInput = {
    id?: StringFieldUpdateOperationsInput | string
    bean_origin?: StringFieldUpdateOperationsInput | string
    importer?: StringFieldUpdateOperationsInput | string
    production_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Recipe_ingredientsUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_ingredientsUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_ingredientsUncheckedUpdateManyWithoutRecipe_ingredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}