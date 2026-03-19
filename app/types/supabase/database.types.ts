export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      demand_items: {
        Row: {
          created_at: string
          demand_id: string
          estimated_price: number | null
          id: string
          item_order: number
          offered_price: number | null
          packaging_type_id: string
          product_id: string
          quantity: number
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          demand_id: string
          estimated_price?: number | null
          id?: string
          item_order: number
          offered_price?: number | null
          packaging_type_id: string
          product_id: string
          quantity: number
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          demand_id?: string
          estimated_price?: number | null
          id?: string
          item_order?: number
          offered_price?: number | null
          packaging_type_id?: string
          product_id?: string
          quantity?: number
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'demand_items_demand_id_fkey'
            columns: ['demand_id']
            isOneToOne: false
            referencedRelation: 'demands'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_items_packaging_type_id_fkey'
            columns: ['packaging_type_id']
            isOneToOne: false
            referencedRelation: 'packaging_types'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_items_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          },
        ]
      }
      demand_sequences: {
        Row: {
          current_number: number
          year: number
        }
        Insert: {
          current_number: number
          year: number
        }
        Update: {
          current_number?: number
          year?: number
        }
        Relationships: []
      }
      demands: {
        Row: {
          created_at: string
          description: string
          dispute_date: string | null
          electronic_process_number: string | null
          id: string
          internal_process_number: number
          object_types_id: number | null
          owner_id: string
          status: string | null
          updated_at: string
          year: number
        }
        Insert: {
          created_at?: string
          description: string
          dispute_date?: string | null
          electronic_process_number?: string | null
          id?: string
          internal_process_number: number
          object_types_id?: number | null
          owner_id?: string
          status?: string | null
          updated_at?: string
          year: number
        }
        Update: {
          created_at?: string
          description?: string
          dispute_date?: string | null
          electronic_process_number?: string | null
          id?: string
          internal_process_number?: number
          object_types_id?: number | null
          owner_id?: string
          status?: string | null
          updated_at?: string
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: 'demands_object_types_id_fkey'
            columns: ['object_types_id']
            isOneToOne: false
            referencedRelation: 'object_types'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demands_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      expense_types: {
        Row: {
          created_at: string
          expense_number: number
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          expense_number: number
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          expense_number?: number
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      object_types: {
        Row: {
          created_at: string | null
          id: number
          name: string
          ptres: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          ptres: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          ptres?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      packaging_types: {
        Row: {
          created_at: string | null
          id: string
          name: string
          name_bec: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          name_bec: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          name_bec?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      product_class: {
        Row: {
          code: number
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          code: number
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          code?: number
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          active: boolean | null
          cat_bec: number
          cat_mat: number
          created_at: string
          description: string
          expense_type_id: string | null
          id: string
          name: string
          nat_bec: number | null
          nat_gov: number | null
          pdm: number | null
          product_class_id: string | null
          specifications: Json | null
          updated_at: string
        }
        Insert: {
          active?: boolean | null
          cat_bec: number
          cat_mat: number
          created_at?: string
          description: string
          expense_type_id?: string | null
          id?: string
          name: string
          nat_bec?: number | null
          nat_gov?: number | null
          pdm?: number | null
          product_class_id?: string | null
          specifications?: Json | null
          updated_at?: string
        }
        Update: {
          active?: boolean | null
          cat_bec?: number
          cat_mat?: number
          created_at?: string
          description?: string
          expense_type_id?: string | null
          id?: string
          name?: string
          nat_bec?: number | null
          nat_gov?: number | null
          pdm?: number | null
          product_class_id?: string | null
          specifications?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'products_expense_type_id_fkey'
            columns: ['expense_type_id']
            isOneToOne: false
            referencedRelation: 'expense_types'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'products_product_class_id_fkey'
            columns: ['product_class_id']
            isOneToOne: false
            referencedRelation: 'product_class'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          name: string | null
          role: Database['public']['Enums']['user_role']
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id: string
          name?: string | null
          role?: Database['public']['Enums']['user_role']
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          name?: string | null
          role?: Database['public']['Enums']['user_role']
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_read_demand: { Args: { owner_id: string }; Returns: boolean }
      can_read_own_profile: { Args: { profile_id: string }; Returns: boolean }
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      user_role: 'user' | 'admin'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ['user', 'admin'],
    },
  },
} as const
