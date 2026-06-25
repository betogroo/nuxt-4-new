export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      demand_items: {
        Row: {
          active: boolean
          created_at: string
          deleted_at: string | null
          demand_id: string
          demand_status_id: string
          estimated_price: number | null
          id: string
          item_order: number
          offered_price: number | null
          packaging_type_id: string
          product_id: string
          quantity: number
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          demand_id: string
          demand_status_id: string
          estimated_price?: number | null
          id?: string
          item_order: number
          offered_price?: number | null
          packaging_type_id: string
          product_id: string
          quantity: number
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          demand_id?: string
          demand_status_id?: string
          estimated_price?: number | null
          id?: string
          item_order?: number
          offered_price?: number | null
          packaging_type_id?: string
          product_id?: string
          quantity?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'demand_items_demand_id_fkey'
            columns: ['demand_id']
            isOneToOne: false
            referencedRelation: 'demand_details_active'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_items_demand_id_fkey'
            columns: ['demand_id']
            isOneToOne: false
            referencedRelation: 'demands'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_items_demand_status_id_fkey'
            columns: ['demand_status_id']
            isOneToOne: false
            referencedRelation: 'demand_status'
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
            referencedRelation: 'product_details_active'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_items_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_items_product_packaging_fkey'
            columns: ['product_id', 'packaging_type_id']
            isOneToOne: false
            referencedRelation: 'product_packaging_types'
            referencedColumns: ['product_id', 'packaging_type_id']
          },
        ]
      }
      demand_sequences: {
        Row: {
          active: boolean
          current_number: number
          deleted_at: string | null
          year: number
        }
        Insert: {
          active?: boolean
          current_number: number
          deleted_at?: string | null
          year: number
        }
        Update: {
          active?: boolean
          current_number?: number
          deleted_at?: string | null
          year?: number
        }
        Relationships: []
      }
      demand_status: {
        Row: {
          active: boolean
          allow_cancel: boolean | null
          code: string
          color: string | null
          created_at: string | null
          deleted_at: string | null
          id: string
          is_demand_active: boolean | null
          is_final: boolean | null
          is_initial: boolean | null
          name: string
          sort_order: number
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          allow_cancel?: boolean | null
          code: string
          color?: string | null
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_demand_active?: boolean | null
          is_final?: boolean | null
          is_initial?: boolean | null
          name: string
          sort_order: number
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          allow_cancel?: boolean | null
          code?: string
          color?: string | null
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_demand_active?: boolean | null
          is_final?: boolean | null
          is_initial?: boolean | null
          name?: string
          sort_order?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      demand_status_transitions: {
        Row: {
          action_label: string | null
          active: boolean | null
          created_at: string
          deleted_at: string | null
          from_status_id: string
          id: string
          to_status_id: string
          updated_at: string
        }
        Insert: {
          action_label?: string | null
          active?: boolean | null
          created_at?: string
          deleted_at?: string | null
          from_status_id: string
          id?: string
          to_status_id: string
          updated_at?: string
        }
        Update: {
          action_label?: string | null
          active?: boolean | null
          created_at?: string
          deleted_at?: string | null
          from_status_id?: string
          id?: string
          to_status_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'demand_status_transitions_from_status_id_fkey'
            columns: ['from_status_id']
            isOneToOne: false
            referencedRelation: 'demand_status'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_status_transitions_to_status_id_fkey'
            columns: ['to_status_id']
            isOneToOne: false
            referencedRelation: 'demand_status'
            referencedColumns: ['id']
          },
        ]
      }
      demands: {
        Row: {
          active: boolean
          created_at: string
          deleted_at: string | null
          description: string
          dispute_date: string | null
          electronic_process_number: string | null
          id: string
          internal_process_number: number
          object_types_id: number | null
          owner_id: string
          updated_at: string
          year: number
        }
        Insert: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          description: string
          dispute_date?: string | null
          electronic_process_number?: string | null
          id?: string
          internal_process_number: number
          object_types_id?: number | null
          owner_id?: string
          updated_at?: string
          year: number
        }
        Update: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          description?: string
          dispute_date?: string | null
          electronic_process_number?: string | null
          id?: string
          internal_process_number?: number
          object_types_id?: number | null
          owner_id?: string
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
          active: boolean
          created_at: string
          deleted_at: string | null
          expense_number: number
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          expense_number: number
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          expense_number?: number
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      object_types: {
        Row: {
          active: boolean
          created_at: string | null
          deleted_at: string | null
          id: number
          name: string
          ptres: number
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name: string
          ptres: number
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name?: string
          ptres?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      packaging_types: {
        Row: {
          active: boolean
          created_at: string | null
          deleted_at: string | null
          id: string
          name: string
          name_bec: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          name: string
          name_bec: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          name?: string
          name_bec?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      product_class: {
        Row: {
          active: boolean
          code: number
          created_at: string | null
          deleted_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          code: number
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          code?: number
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      product_packaging_types: {
        Row: {
          active: boolean
          created_at: string
          deleted_at: string | null
          id: string
          packaging_type_id: string
          product_id: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          id?: string
          packaging_type_id: string
          product_id: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          deleted_at?: string | null
          id?: string
          packaging_type_id?: string
          product_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'product_packaging_types_packaging_type_id_fkey'
            columns: ['packaging_type_id']
            isOneToOne: false
            referencedRelation: 'packaging_types'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'product_packaging_types_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'product_details_active'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'product_packaging_types_product_id_fkey'
            columns: ['product_id']
            isOneToOne: false
            referencedRelation: 'products'
            referencedColumns: ['id']
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          cat_bec: number
          cat_mat: number
          created_at: string
          deleted_at: string | null
          description: string
          expense_type_id: string | null
          id: string
          name: string
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
          deleted_at?: string | null
          description: string
          expense_type_id?: string | null
          id?: string
          name: string
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
          deleted_at?: string | null
          description?: string
          expense_type_id?: string | null
          id?: string
          name?: string
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
          active: boolean
          avatar_url: string | null
          created_at: string
          deleted_at: string | null
          id: string
          name: string | null
          role: Database['public']['Enums']['user_role']
          updated_at: string
        }
        Insert: {
          active?: boolean
          avatar_url?: string | null
          created_at?: string
          deleted_at?: string | null
          id: string
          name?: string | null
          role?: Database['public']['Enums']['user_role']
          updated_at?: string
        }
        Update: {
          active?: boolean
          avatar_url?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          name?: string | null
          role?: Database['public']['Enums']['user_role']
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      demand_details_active: {
        Row: {
          created_at: string | null
          description: string | null
          dispute_date: string | null
          electronic_process_number: string | null
          id: string | null
          internal_process_number: number | null
          object_type: Json | null
          owner: Json | null
        }
        Relationships: []
      }
      demand_items_active: {
        Row: {
          created_at: string | null
          demand_id: string | null
          estimated_price: number | null
          id: string | null
          offered_price: number | null
          packaging: Json | null
          product: Json | null
          quantity: number | null
          status: Json | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'demand_items_demand_id_fkey'
            columns: ['demand_id']
            isOneToOne: false
            referencedRelation: 'demand_details_active'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_items_demand_id_fkey'
            columns: ['demand_id']
            isOneToOne: false
            referencedRelation: 'demands'
            referencedColumns: ['id']
          },
        ]
      }
      demand_status_transitions_active: {
        Row: {
          action_label: string | null
          from_status_id: string | null
          to_status: Json | null
        }
        Relationships: [
          {
            foreignKeyName: 'demand_status_transitions_from_status_id_fkey'
            columns: ['from_status_id']
            isOneToOne: false
            referencedRelation: 'demand_status'
            referencedColumns: ['id']
          },
        ]
      }
      product_details_active: {
        Row: {
          active: boolean | null
          cat_bec: number | null
          cat_mat: number | null
          class: Json | null
          description: string | null
          expense_type: Json | null
          id: string | null
          name: string | null
          nat_gov: number | null
          packaging_types: Json | null
          pdm: number | null
          specifications: Json | null
        }
        Relationships: []
      }
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
