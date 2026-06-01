export const ROUTE_PATH = {
	HOME: '/',
	AUTH: {
		SIGN_IN: '/sign-in',
	},
	PUBLIC: {
		MY_PURCHASE: {
			ID: '/my-purchase/[id]',
		},
		PRIVACY_POLICY: '/privacy-policy',
		TERMS_OF_SERVICE: '/terms-of-service',
	},
	PRIVATE: {
		PANEL: {
			DASHBOARD: '/panel',
			ACCOUNT: '/panel/account',
			SETUP: '/panel/setup',

			OPERATIONS: {
				POS: {
					NEW_SALE: '/panel/new-sale',
					CASHIER_SHIFTS: '/panel/cashier-shifts',
					HISTORY_SALES: {
						PATH: '/panel/history-sales',
						ID: '/panel/history/[id]',
					},
				},
				BOXES: {
					PATH: '/panel/boxes',
					ID: '/panel/boxes/[id]',
				},
				CUSTOMERS: '/panel/customers',
			},

			CATALOG: {
				PRODUCTS: {
					LIST: {
						PATH: '/panel/list',
						ID: '/panel/list/[id]',
					},
					CATEGORIES: '/panel/categories',
					BRANDS: '/panel/brands',
				},
				LOTS: '/panel/lots',
			},

			INVENTORY: {
				STOCK: {
					KARDEX: {
						PATH: '/panel/kardex',
						ID: '/panel/kardex/[id]',
					},
					MOVEMENTS: '/panel/movements',
				},
				PURCHASE: {
					ORDERS: '/panel/orders',
					NEW: '/panel/new-order',
				},
				SUPPLIERS: '/panel/suppliers',
			},

			FINANCE: {
				TAX_DOCUMENTS: {
					INVOICES: '/panel/invoices',
				},
				EXPENSES: {
					CATEGORIES: '/panel/expenses/category',
					EXPENSE: '/panel/expenses',
				},
			},

			SYSTEM: {
				LOGS: '/panel/logs',
				CONFIGURATION: {
					BUSINESS: '/panel/business',
					PREFERENCES: '/panel/preferences',
					PAYMENT_METHODS: '/panel/payment-methods',
				},
				PERSONALIZATION: '/panel/personalization',
				USERS: '/panel/users',
			},
		},
	},
}
